import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "boxicons";
import MobileNav from "./MobileNav";
import Social from "./Social";

export const NavLinks = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className=" text-xl fixed z-30 h-[90px] xl:h-[130px] w-full p-5 flex justify-between items-center uppercase font-primary">
            <nav className="flex flex-col lg:flex-row lg:items-center w-full justify-between">

                <Link to={"/"}>
                    <img className="object-contain " src={logo} alt="log" />
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    <NavLinks />
                </div>
            </nav>
            <Social/>
            <MobileNav />
        </header>
    );
};

export default Navbar;
