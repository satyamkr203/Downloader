import express from 'express';
import youtube_vidoes from '../controllers/youtube_controllers.mjs';
const router = express.Router();


router.route("/download/youtube_vidoes").post(youtube_vidoes)


export default router;