import React from "react";
import WomanImg from "../../assets/Rectangle 123.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../transition";
const Home = () => {
    return (
        <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={transition1} className="section">
            <div className="container h-full mx-auto relative ">
                <div className=" flex flex-col justify-center  ">
                    <motion.div 
                     initial={{ opacity: 0 , y:'-50%'}} 
                     animate={{ opacity: 1 , y:0}} 
                     exit={{ opacity: 0 , y:'-50%' }} 
                     transition={transition1}
                    className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
                        <h1 className="font-primary tracking-[-0.05em] font-bold text-[54px] lg:text-[108px]">
                            Photographer <br /> & Film Maker
                        </h1>

                        <p className="font-primary text-[24px] pb-[30px] lg:text-[36px] lg:mb-5">Los Angeles, USA</p>
                        <Link to='/contact'>
                            <button className="bg-black w-[100px] h-[50px] text-white font-secondary ">HIRE ME</button>
                        </Link>
                    </motion.div>

                    <div className="flex justify-end max-h-96 lg:max-h-max md:overflow-hidden ">
                        <motion.div
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          exit={{ scale: 0 }} 
                          transition={transition1}
                         className="relative lg:-right-40  ">
                            <img className="object-contain" src={WomanImg} alt="img" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
