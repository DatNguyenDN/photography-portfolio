import React from "react";
import img1 from "../../assets/pexels-bruno-felix-4286956.png";
import img2 from "../../assets/pexels-polina-tankilevitch-4723521-2.png";
import img3 from "../../assets/pexels-moose-photos-1586973.png";
import img4 from "../../assets/pexels-oleja-titoff-5797579.png";
import img5 from "../../assets/pexels-polina-tankilevitch-4723521.png";
import img6 from "../../assets/Rectangle 133.png";
import img7 from "../../assets/Rectangle 134.png";
const Portfolio = () => {
    return (
        <section className="section  ">
            <div className="container mx-auto h-full relative">
                <div className="flex flex-row h-full w-full items-center justify-start gap-x-10 text-center lg:text-left pt-24 lg:pt-30 pb-8 max-sm:flex-col">
                    <div className="flex flex-col items-start font-secondary pb-5 w-[40%] text-start max-sm:w-full max-sm:p-3 ">
                        <h1 className="font-primary font-semibold text-3xl">Portfolio </h1>

                        <br />
                        <div className="flex  gap-5 font-primary font-normal text-md leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque ut corporis consequuntur sapiente at itaque dicta? Aliquam
                            doloribus placeat aspernatur quam!
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-[60%] ">
                        <img className="w-[250px] h-[200px] object-cover col-span-1" src={img1} alt="img1" />
                        <img className="w-[250px] h-[200px] object-cover col-span-1" src={img2} alt="img1" />{" "}
                        <img className="w-[250px] h-[200px] object-cover col-span-1r" src={img3} alt="img1" />{" "}
                        <img className="w-[250px] h-[200px] object-cover col-span-1" src={img4} alt="img1" />
                        <img className="w-[250px] h-[200px] object-cover col-span-1" src={img5} alt="img1" />
                        <img className="w-[250px] h-[200px] object-cover col-span-1" src={img6} alt="img1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
