'use client';
import React from 'react';
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
    <div className='h-screen items-center flex bg-[#2c98f025] pl-[70px] w-full'>
        <div>
            <div className='text-[60px] font-bold '>
                <h1>
                    Hi There!
                </h1>
                <p>I&apos;m a <span> 
                            <Typewriter
                                words={["Web Designer", "Developer", "Freelancer"]}
                                loop
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1000}
                                /> 
                        </span>
                </p>

            </div>
            <div>
                <a href="/File/CV.pdf" target="_blank"  className='flex gap-x-2 w-[120px]  border-2 p-2 cursor-pointer  items-center justify-center text-center text-[12px] mt-[40px] hover:bg-[#2c98f094] select-none'>Download CV <FaDownload /> </a>
            </div>
        </div>
    </div>
  )
}

export default page