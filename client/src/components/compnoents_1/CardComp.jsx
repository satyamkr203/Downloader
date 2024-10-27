
import { Card, Button } from "flowbite-react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function CardComp() {
  return (
    <>
      <div className="flex justify-center items-center text-center mt-10">
        <div className="w-full max-w-7xl px-4 ring-5 rounded-lg p-8 ring-white ring-opacity-20">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-row gap-14 justify-center ">
            <div className="">
                <Card className="max-w-sm bg-background_color border-opacity-20 hover:border-opacity-45" horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-gray-200 text-left flex items-center">
                    <FaInstagram className="mr-2" /> {/* Instagram Icon */}
                    Instagram
                  </h5>
                  <p className="font-normal text-gray-200 dark:text-gray-400 text-left">
                    Download Instagram stories, reels, and posts effortlessly with our simple and efficient tool, ensuring you never miss out on your favorite content.
                  </p>
                  <Button as={Link} to="/insta" className="" color="light">
                    Click here to download
                  </Button>
                </Card>
              </div>
              <div>
                <Card className="max-w-sm bg-background_color border-opacity-20 hover:border-opacity-45" horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-gray-200 text-left flex items-center">
                    <FaYoutube className="mr-2 text-red-600" /> {/* YouTube Icon */}
                    YouTube
                  </h5>
                  <p className="font-normal text-gray-200 dark:text-gray-400 text-left">
                    Download YouTube videos, playlists, and shorts in high quality with ease, ensuring you have access to your favorite content anytime.
                  </p>
                  <Button as={Link} to="/youtube" color="light">Click here to download</Button>
                </Card>
              </div>
            </div>

            <div className="flex flex-row gap-14 justify-center">
              <div>
                <Card className="max-w-sm bg-background_color border-opacity-20 hover:border-opacity-45" horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-gray-200 text-left flex items-center">
                    <FaTiktok className="mr-2" /> {/* TikTok Icon */}
                    Tik Tok
                  </h5>
                  <p className="font-normal text-gray-200 dark:text-gray-400 text-left">
                    Download TikTok videos, challenges, and trends effortlessly in high quality, so you never miss out on the latest content.
                  </p>
                  <Button as={Link} to="/tiktok" color="light">Click here to download</Button>
                </Card>
              </div>
              <div>
                <Card className="max-w-sm bg-background_color border-opacity-20 hover:border-opacity-45" horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-gray-200 text-left flex items-center">
                    <FaTwitter className="mr-2" /> {/* Twitter Icon */}
                    Twitter
                  </h5>
                  <p className="font-normal text-gray-200 dark:text-gray-400 text-left">
                    Download Twitter videos, threads, and moments easily in high quality, keeping all your favorite content accessible anytime.
                  </p>
                  <Button as={Link} to="/twitter" color="light">Click here to download</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComp;
