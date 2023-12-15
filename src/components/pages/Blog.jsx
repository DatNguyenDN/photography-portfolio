import React from "react";

const Blog = () => {
    return (
        <section className="section">
            <div className="container h-full mx-auto relative">
                <div className="flex flex-col pt-36 p-[5%]">
                    <h1 className="font-primary text-[54px] pb-3">Blog</h1>
                    <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
                        <div className="max-w-md w-full capitalize">
                            <p className="text-sm">01-01-2023</p>
                            <h1 className="font-primary text-[24px] pb-2">why the trend of minimalism?</h1>
                            <p >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ea aliquam voluptatum nemo maiores molestiae inventore veniam
                                sed? Inventore,
                            </p>
                        </div>

                        <div className="w-full capitalize max-w-md">
                            <p className="text-sm">05-10-2023</p>
                            <h1 className="font-primary text-[24px] pb-2">world’s top photograph collections</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ea aliquam voluptatum nemo maiores molestiae inventore veniam
                                sed? Inventore,
                            </p>
                        </div>

                        <div className="w-full capitalize">
                            <p className="text-sm">13-12-2023</p>
                            <h1 className="font-primary text-[24px] pb-2">simple tips & tricks of photography</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ea aliquam voluptatum nemo maiores molestiae inventore veniam
                                sed? Inventore,
                            </p>
                        </div>

                        <div className="w-full capitalize max-w-md">
                            <p className="text-sm">03-11-2023</p>
                            <h1 className="font-primary text-[24px] pb-2">how to get model look portraits</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ea aliquam voluptatum nemo maiores molestiae inventore veniam
                                sed? Inventore,
                            </p>
                        </div>
                    </div>
                    <div className="block pt-10">
                        <button className="bg-black btn btn-md w-[30%]">Explore More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
