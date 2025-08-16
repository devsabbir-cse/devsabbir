import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBriefcase  } from "react-icons/fa";

const page = () => {
  return (
    <div className='bg-[#2c98f020] px-[70px] w-full overflow-y-auto pb-10'>
        <div className='mt-[100px] '>
            <div className='mb-[50px] flex items-center '>
                <p className='w-[120px]'>
                  EXPERIENCE
                </p>
                <div className='w-full h-[2px] bg-[#7D7789] '>
                </div>
                
            </div>
        </div>
        <div className='flex w-full gap-x-[10px]'>
          <div className='flex flex-col items-center'>
            <div className='w-[60px] h-[60px] rounded-full bg-gray-200 relative'>
              <div className='w-[40px] h-[40px] rounded-full bg-[#2C98F0] absolute left-1/2 top-1/2  -translate-1/2' ></div>
              <BsPersonWorkspace className='text-2xl absolute left-1/2 top-1/2  -translate-1/2 text-white'/>            
            </div>
            <div className='w-[5px] h-[180px] bg-gray-200 justify-center items-center flex flex-col'>
            </div>
          </div>
          <div className=' bg-gray-200 pl-10 w-full h-[220px] flex flex-col justify-center'>
            <p className='font-bold text-xl'>API Integration Developer (Contract – Remote)</p>
            <a href='https://www.hamsfly.com/' target='_blank' className='text-[#1b6fbf] hover:underline underline-offset-2 cursor-pointer '>https://www.hamsfly.com/</a>
            <p>June 2024 – September 2024</p>
            <ul className='list-disc pl-5 mt-5'>
              <li>
                a Integrated Sabre API for flight search and booking <br />

              </li>
              <li>
                a Developed flight features like live fares and route search.

              </li>
            </ul>

      

            
          </div>

        </div>
        <div className='flex w-full gap-x-[10px]'>
          <div className='flex flex-col items-center'>
            <div className='w-[60px] h-[60px] rounded-full bg-gray-200 relative'>
              <div className='w-[40px] h-[40px] rounded-full bg-[#F9BF3F] absolute left-1/2 top-1/2  -translate-1/2' ></div>
              <FaBriefcase  className='text-2xl absolute left-1/2 top-1/2  -translate-1/2 text-white'/>            
            </div>
            <div className='w-[5px] h-[170px] bg-gray-200 justify-center items-center flex flex-col'>
            </div>
          </div>
          <div className=' bg-gray-200 pl-10 w-full h-[220px] flex flex-col justify-center'>
            <p className='font-bold text-xl mb-5'>House/Room Rental Management (Mobile App) - <span className='text-[#178def]'>Client Project</span></p>
            
            <p className='font-semibold'>A fully functional mobile application for managing rental houses and rooms</p>
            <ul className='list-disc pl-5 '>
              <li>
                Built with Java and PHP, using MySQL database for backend management

              </li>
              <li>
                Features: Room listing, rent tracking, tenant info, billing system.Live & in use by real renters 

              </li>
            </ul>

      

            
          </div>

        </div>
        <div className='flex w-full gap-x-[10px]'>
          <div className='flex flex-col items-center'>
            
            <div className='w-[60px] h-[60px] rounded-full bg-gray-200 relative'>
              <div className='w-[40px] h-[40px] rounded-full bg-[#A84CB8] absolute left-1/2 top-1/2  -translate-1/2' ></div>
              <FaBriefcase className='text-2xl absolute left-1/2 top-1/2  -translate-1/2 text-white'/>            
            </div>
            <div className='w-[5px] h-[160px] bg-gray-200 justify-center items-center flex flex-col'>
            </div>
          </div>
          
          <div className=' bg-gray-200 pl-10 w-full h-[220px] flex flex-col justify-center relative'>
            <p className='absolute left-[5px] top-[5px] text-red-500'>
              <span className='text-[14px] font-semibold'>Under Developing...</span>
            </p>
            <p className='font-bold text-xl '>Rajuria High School(Website) - <span className='text-[#178def]'>Client Project</span></p>
            <p className='text-[#1b6fbf]'>https://www.rajuriahighschool.edu.bd/</p>
            <a href='https://rajuriahighschool.vercel.app/' target='_blank' className='text-[#1b6fbf] hover:underline underline-offset-2 cursor-pointer'>https://rajuriahighschool.vercel.app/</a>
            <p className='font-semibold mt-5 leading-relaxed'>
              A school website for Rajuria High School, providing information about the institution and its activities.
            </p>
            <ul className='list-disc pl-5  '>
              <li>
                Built with Next.js, React, and Tailwind CSS, using MySQL database for backend management
              </li>
              <li>
                Features: School information, admission details, event updates, and contact information.              </li>
            </ul>

      

            
          </div>

        </div>
    </div>
  )
}

export default page