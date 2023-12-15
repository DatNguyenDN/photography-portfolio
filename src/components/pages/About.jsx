import React from "react";
import aboutIMG from "../../assets/Rectangle 124.png";
const About = () => {
    return (
        <section className="section">
            <div className="container h-full mx-auto relative">
                <div className="flex flex-col-reverse lg:flex-row h-full justify-center items-center text-center gap-x-24 lg:text-left lg:pt-16 ">
                    <div className="flex-1 max-h-96 lg:max-h-max lg:order-none lg:overflow-hidden   ">
                        <img src={aboutIMG} alt="img" />
                    </div>

                    <div className="flex-1  pt-32 pb-14 lg:p-0 lg:w-auto max-sm:w-full z-10 p-[3%] flex flex-col justify-center items-center max-sm:mt-[130px]">
                        <h1 className="font-primary font-bold text-[56px] max-sm:text-3xl">About Me</h1>
                        <br />
                        <p className="font-secondary text-[16px] leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque ut corporis consequuntur sapiente at itaque dicta? Aliquam
                            doloribus placeat aspernatur quam!
                        </p>
                        <br />
                        <p className="font-secondary text-[16px] leading-7">
                            Molestiae nisi sit tempore, explicabo repellat, quibusdam tenetur vitae voluptates officiis nihil similique eius cumque voluptas
                            odit? Aliquam doloribus placeat aspernatur quam!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
