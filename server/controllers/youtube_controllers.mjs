
import express from 'express';
import ytdl from '@distube/ytdl-core';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';


// Defining __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const youtube_vidoes = async (req, res) => {
    const videoUrl = req.body.videoUrl;

    // Validate the YouTube URL
    if (!ytdl.validateURL(videoUrl)) {
        return res.status(400).send({ msg: "Invalid YouTube URL." });
    }

    let writeStream;  // Declare writeStream for potential cleanup
    let filePath;  // Track file path for cleanup if aborted

    try {
        // Get video info
        console.log("Fetching video info for URL:", videoUrl);
        const videoInfo = await ytdl.getInfo(videoUrl);

        // Clean up the title and generate a unique file name
        const title = videoInfo.videoDetails.title.replace(/[/\\?%*:|"<>]/g, '');
        const fileName = `${uuidv4()}-${title}.mp4`;

        // Secure temporary directory
        const tempDir = path.join(__dirname, 'secure-tmp');
        
        // Ensure temp directory exists
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        filePath = path.join(tempDir, fileName);

        // Create video stream with filter for mp4 format
        const videoStream = ytdl(videoUrl, {
            filter: format => format.container === 'mp4',
        });

        // Handle client aborting the request
        req.on('aborted', () => {
            console.log('Client aborted request.');
            if (videoStream) videoStream.destroy();  // Stop the video stream if the client disconnects
            if (writeStream) writeStream.end();  // Stop writing to file if the client disconnects

            // Clean up the file if partially written
            if (filePath && fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) console.error("Couldn't delete the file on abort:", err);
                });
            }
        });

        // Create a writable stream to save the file
        writeStream = fs.createWriteStream(filePath);

        // Pipe the video stream to the writable stream
        videoStream.pipe(writeStream);

        // When the file has been fully written, send it for download
        writeStream.on('finish', () => {
            if (!res.headersSent) {  // Check if headers have already been sent
                res.download(filePath, `${title}.mp4`, (err) => {
                    if (err) {
                        console.error("Error during download:", err);
                        return res.status(500).send({ msg: "Error during download." });
                    }
                    // Clean up the temp file after sending it
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error("Couldn't delete the file:", err);
                        }
                    });
                });
            }
        });

        // Error handling for writable stream
        writeStream.on('error', (err) => {
            if (!res.headersSent) {
                console.error("Error writing the file:", err);
                res.status(500).send({ msg: "Error while writing the video." });
            }
        });

        // Error handling for video stream
        videoStream.on('error', (err) => {
            if (!res.headersSent) {
                console.error("Error streaming the video:", err);
                return res.status(500).send({ msg: "Error processing the video." });
            }
        });

    } catch (error) {
        if (!res.headersSent) {
            console.error("Error during video processing:", error);
            // Handle specific error like 404 video not found
            if (error.statusCode === 404) {
                res.status(404).send({ msg: "Video not found." });
            } else {
                res.status(500).send({ msg: "Problem with video processing." });
            }
        }
    }
};

export default youtube_vidoes;
