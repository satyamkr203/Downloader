
import { NavbarBrand, Navbar, NavbarCollapse, Button, NavbarToggle, NavbarLink } from "flowbite-react";
import { Link } from "react-router-dom";
function NavbarComp() {
    return (
        <>
            <Navbar className="bg-background_color  z-10 sticky top-0  border-b  border-white border-opacity-20 p-0 h-12  w-full">
                <NavbarBrand as={Link} to="/" className="text-white ">
                    <div className="text-2xl p-0 ml-2 text-emerald-300 sm:text-4xl"> Downloader</div>
                </NavbarBrand>
                <div className="flex md:order-2 gap-2 ">
                    <Button className="text-white bg-background_color ring-1 ring-white  ring-opacity-20 " color="dark">Log In</Button>
                    <Button className="  bg-white text-background_color " color="light">Sign Up</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse className="flex-wrap gap-4">
                    <NavbarLink href="#" className="text-xl text-gray-400 font-normal" >Home</NavbarLink>
                    <NavbarLink href="#" className="text-xl text-gray-400 font-normal">About</NavbarLink>
                    <NavbarLink href="#" className="text-xl text-gray-400 font-normal">Services</NavbarLink>
                    <NavbarLink href="#" className="text-xl text-gray-400 font-normal">Pricing</NavbarLink>
                    <NavbarLink href="#" className="text-xl text-gray-400 font-normal">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;
