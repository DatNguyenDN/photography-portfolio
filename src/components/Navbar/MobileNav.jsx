import React, { useState } from "react";
import { NavLinks } from "./Navbar";
import { motion } from "framer-motion";

const menuVariants = {
    hidden: {
        x: "100%",
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
};

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="xl:hidden md:hidden">
            {/**Open */}
            <div onClick={() => setOpenMenu(true)} className="cursor-pointer">
                <box-icon 
                name="menu-alt-right"
                ></box-icon>
            </div>
            {/**Menu */}
            <motion.div
                initial="hidden"
                animate={openMenu ? "show" : ""}
                variants={menuVariants}
                className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
            >
                <div onClick={() => setOpenMenu(false)} className="text-4xl absolute z-30 lef-4 top-14 cursor-pointer">
                    <box-icon name="x"></box-icon>
                </div>
                <ul className="h-full flex flex-col text-display justify-center items-center gap-y-10 font-display text-2xl"
                onClick={()=> setOpenMenu(false)}
                >
                    <NavLinks />
                </ul>
            </motion.div>
        </nav>
    );
};

export default MobileNav;
