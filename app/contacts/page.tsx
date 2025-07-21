import { Metadata } from 'next';
import React from 'react'
import { BsGeoAlt} from 'react-icons/bs';
import { FiMail, FiPhone } from 'react-icons/fi';
export const metadata: Metadata = {
  title: "Contact Me"
};
const page = () => {
  return (
    <div className='py-32 lg:pl-[19%]'>
       <h1 className="lg:pl-[19%] text-6xl lg:text-7xl font-bold absolute top-40 left-0 opacity-5 text-gray-400">CONTACT ME</h1>
          <div className="pl-4 lg:pl-0 lg:w-[320px]">
            <h1 className="font-manrope relative leading-tight text-3xl lg:text-5xl font-semibold">
              CONTACT ME
            </h1>
            <div className="
                      w-[50%] h-[0.4rem] 
                      bg-[#0c3360] 
                      rounded-[10px] 
                      mt-4
                      relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']
                      ">
              </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-10 p-4 lg:pl-0 lg:pr-4">
            <form action="" className="lg:w-1/2">
              <h4 className='text-2xl'>Get In Touch</h4>
              <div className="flex flex-col mt-6">
          
                <div className="relative w-full max-w-lg mb-6">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 px-2 bg-[#0f172a] text-sm text-[#86a4c4]"
                >
                  Enter your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  className="w-full border-1 border-gray-600 bg-transparent text-gray-100 px-4 py-3 rounded-none focus:outline-none "
                />
              </div>

              <div className="relative w-full max-w-lg mb-6">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 px-2 bg-[#0f172a] text-sm text-[#86a4c4]"
                >
                  Enter your email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="w-full border border-gray-600 bg-transparent text-gray-100 px-4 py-3 rounded-none focus:outline-none "
                />
              </div>
              <div className="relative w-full max-w-lg mb-6">
                <label
                  htmlFor="subject"
                  className="absolute -top-2 left-3 px-2 bg-[#0f172a] text-sm text-[#86a4c4]"
                >
                  Enter your Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder=""
                  className="w-full border border-gray-600 bg-transparent text-gray-100 px-4 py-3 rounded-none focus:outline-none"
                />
              </div>


              
              </div>
              <div className="relative w-full max-w-lg mb-6">
                <label
                  htmlFor="message"
                  className="absolute -top-2 left-3 px-2 bg-[#0f172a] text-sm text-[#86a4c4]"
                >
                  Enter your message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border-[0.05rem] border-gray-600 bg-transparent text-gray-100 px-4 py-4 rounded-none focus:outline-none resize-none"
                ></textarea>
              </div>

              <button className="group relative bg-[#037fff] py-3 px-6 mt-8 cursor-pointer overflow-hidden">
                  <span className="relative z-10 text-white">SEND EMAIL</span>
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full
                      bg-white
                      origin-right
                      scale-x-0
                      transition-transform
                      duration-500
                      ease-in-out
                      group-hover:origin-left
                      group-hover:scale-x-100
                    "
                  ></span>
                </button>
            </form>
            <div className="lg:w-1/2 ">
              <div className="flex gap-2 bg-[#191d2b] font-light p-6">
                <div className="text-center border border-gray-600 p-6">
                  <FiPhone size={30}/>
                </div>
                <div className="">
                  <p>Phone</p>
                  <p className='text-[#86a4c4]'>+234-703-8699-659</p>
                  <p className='text-[#86a4c4]'>+234-815-5975-040</p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#191d2b] font-light mt-6 p-6">
                <div className="text-center border border-gray-600 p-6">
                  <FiMail size={30}/>
                </div>
                 <div className="">
                  <p>Email</p>
                  <p className='text-[#86a4c4]'>admin.@example.com</p>
                  <p className='text-[#86a4c4]'>info.name@example.com</p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#191d2b] font-light mt-6 p-6">
                 <div className="text-center border border-gray-600 p-6">
                    <BsGeoAlt size={30}/>
                 </div>
                 <div className="">
                  <p>Address</p>
                  <p className='text-[#86a4c4]'>121 King Street, Melbourne, Victoria 3000, Australia</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default page