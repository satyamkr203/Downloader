
import FooterComp from "../components/compnoents_1/FooterComp"
import NavbarComp from "../components/compnoents_1/NavbarComp";
import { Button, TextInput, Card } from "flowbite-react";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";

function YoutubePage() {
    return (
        <>
            <NavbarComp />
            <div className="px-4 py-4 text-center">
                <div className="py-5">
                    <h1 className="text-5xl sm:text-5xl text-pretty text-emerald-300 mt-2 m-0">
                        Download YouTube Videos, Shorts
                    </h1>
                    <h1 className="text-5xl sm:text-5xl text-emerald-300">
                        & Music, Instantly.
                    </h1>
                </div>
            </div>
            {/* Button Group */}
            <div className="col-lg-6 mx-auto mt-14">
                <div className="flex flex-wrap justify-center items-center">
                    <Button.Group
                        className="p-1 ring-5 ring-white ring-opacity-15 rounded-md text-center w-full sm:w-auto"
                        outline
                    >
                        <Button color="dark" className="bg-background_color text-white border-r-5 border-r-white border-opacity-30 w-full sm:w-auto">
                            <FaYoutube className="mr-3 h-6 w-8" />
                            YouTube Videos
                        </Button>
                        <Button color="dark" className="bg-background_color text-white border-r-5 border-r-white border-opacity-30 w-full sm:w-auto">
                            <SiYoutubeshorts className="mr-3 h-6 w-8" />
                            YouTube Shorts
                        </Button>
                        <Button color="dark" className="bg-background_color w-full sm:w-auto">
                            <SiYoutubemusic className="mr-3 h-6 w-8" />
                            YouTube Music
                        </Button>
                    </Button.Group>
                </div>
            </div>

            {/* Form */}
            <div className="gap-2 mt-10 flex justify-center items-center">
                <form className="flex flex-wrap max-w-lg gap-4 w-full sm:w-96">
                    <TextInput
                        id="url-1"
                        type="url"
                        placeholder="Paste your URL here."
                        required
                        className="flex-1 min-w-0"  // Makes input flexible
                    />
                    <Button type="submit" color="dark" className="w-full sm:w-auto">
                        Submit
                    </Button>
                </form>
            </div>
            {/* After submitting the url to the client  */}
            <div className="mt-10 flex flex-col justify-center items-center ">
                <Card className="sm:max-w-sm bg-background_color m-4 " imgSrc="/images/blog/image-4.jpg" horizontal>
                    <h5 className="text-2xl font-medium text-white dark:text-black">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-white dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <div className="flex flex-col justify-center items-center ">
                    <div className=" p-6 m-2 w-max-sm bg-background_color text-white ring-5 ring-white ring-opacity-30 hover:ring-opacity-50 rounded-lg mt-10">
                        <div className="card-body">
                            <h5 className="card-title">video.title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Button className="mt-3" color="light">Download</Button>
                        </div>
                    </div>
                    <div className=" p-6 m-2 w-max-sm bg-background_color text-white ring-5 ring-white ring-opacity-30 hover:ring-opacity-50 rounded-lg">
                        <div className="card-body">
                            <h5 className="card-title">video.title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Button className="mt-3" color="light">Download</Button>
                        </div>
                    </div>
                    <div className=" p-6 m-2 w-max-sm bg-background_color text-white ring-5 ring-white ring-opacity-30 hover:ring-opacity-50 rounded-lg ">
                        <div className="card-body">
                            <h5 className="card-title">video.title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Button className="mt-3" color="light">Download</Button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </>
    );
}

export default YoutubePage;
