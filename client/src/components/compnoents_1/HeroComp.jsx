import { Button } from 'flowbite-react'

function HeroComp() {
    return (
        <>
            <div className="px-4 py-4 text-center">
                <div className="py-5">
                    <h1 className="text-5xl sm:text-7xl text-pretty text-white mt-16 m-0">
                        Download Videos From Anywhere </h1>
                    <h1 className="text-5xl sm:text-7xl text-emerald-300">Fast, Free and Easy.</h1>
                    <div className="col-lg-6 mx-auto mt-10">
                        <p className=" text-sm sm:text-xl font-sans text-gray-300 font-light"> Download your favorite videos without the need for complex setups or logins.
                        </p>
                        <p className="  text-sm sm:text-xl m-0 font-sans text-gray-300 font-light">Fast, free, and straightforward—just paste your URL and go.</p>
                        <div className=" gap-2 mt-10 flex m-0 justify-center align-center text-center ">
                            <Button className='h-10 w-40' color="light">Get started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroComp;