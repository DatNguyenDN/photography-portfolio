import React from "react";
import contactIMG from '../../assets/pexels-ketut-subiyanto-4429560 2.jpg'
const Contact = () => {
    return (
        <section className="section ">
            <div className="container h-full mx-auto relative ">
      
               <div className="flex flex-col lg:flex-row justify-between p-[3%]  ">
                  <div className="flex flex-col  justify-center items-center pt-36 max-sm:pt-14 ">
                      <div className="flex-col w-full max-sm:text-center max-lg:text-center pb-5 ">
                          <h1 className="font-primary text-[108px] max-sm:text-[80px]">Contact</h1>
                          <p className="font-primary ">I would love to get suggestions from you.</p>
                      </div>
  
                      <form className="">
                          <div className="flex gap-5">
                              <input className="outline-none border-b border-b-gray-600 h-[50px] bg-transparent" type="text" placeholder="Your name" />
  
                              <input className="outline-none border-b border-b-gray-600 h-[50px] bg-transparent" type="text" placeholder="Your email" />
                          </div>
                          <div>
                              <input className="outline-none border-b border-b-gray-600 h-[50px] bg-transparent w-full" type="text" placeholder="Your message" />
                          </div>
                          <div className="pt-5">
                             
                              <button className="btn h-[50px] ">Send</button>
                          </div>
                      </form>
                      
                  </div>
                  <div className="max-w-md pt-10 ">
                    <img className="object-cover " src={contactIMG} alt="" />
                  </div>
               </div>
            </div>
        </section>
    );
};

export default Contact;
