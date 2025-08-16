'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const SideBar = () => {
    const [active, setActive] = useState('');
  return (
    <div className=''>
        <div className='h-screen w-[300px] bg-[#F2F3F7]  text-center flex flex-col justify-between  relative py-5'>

            <div>

                <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex m-auto mb-3">
                {/* <div className='bg-fuchsia-300 rounded-full w-[150px] h-[150px] flex m-auto mb-3'> </div> */}
                <Image src="/File/Formal.jpg" alt="myImg" width={150} height={150}  className='object-cover'/>
                {/* <Image src="/File/myImg.jpg" alt="myImg" width={150} height={150}  className='object-cover'/> */}
                </div>
                <div>
                    <p className='text-[22px] font-bold'>Md Sabbir Islam</p>
                    <p className='text-[12px]'><span className='text-[#2C98F0]'>FULL STACK DEVELOPER</span> IN BANGLADESH</p>
                </div>

            </div>

            


            <div>
                <ul className='text-[12px] font-semibold gap-y-[10px] flex flex-col '>
                    <Link href="/">
                        <li onClick={()=>setActive('HOME')} className={`${active === 'HOME' ? 'text-[#2C98F0] font-bold underline underline-offset-2' : 'hover:bg-gray-200' } cursor-pointer`}>HOME</li>
                    </Link>
                    <Link href="/pages/EXPERIENCE">
                        <li onClick={()=>setActive('EXPERIENCE')} className={`${active==='EXPERIENCE' ? 'text-[#2C98F0] font-bold underline underline-offset-2': 'hover:bg-gray-200'} cursor-pointer`}>EXPERIENCE</li>
                    </Link>
                    <Link href="/pages/SKILLS">
                        <li onClick={()=>setActive('SKILLS')} className={`${active==='SKILLS' ? 'text-[#2C98F0]  font-bold underline underline-offset-2': 'hover:bg-gray-200'} cursor-pointer`}>SKILLS</li>
                    </Link>
                     <Link href="/pages/ABOUT">
                        <li onClick={()=>setActive('ABOUT')} className={`${active==='ABOUT' ? 'text-[#2C98F0]  font-bold underline underline-offset-2': 'hover:bg-gray-200'} cursor-pointer`}>ABOUT</li>
                    </Link>
                    
                    {/* <Link href="/pages/EDUCATION">
                        <li onClick={()=>setActive('EDUCATION')} className={`${active==='EDUCATION' ? 'text-[#2C98F0] font-bold underline underline-offset-2': 'hover:bg-gray-200'} cursor-pointer`}>EDUCATION</li>
                    </Link> */}
                    
                    <Link href="/pages/CONTACT">
                        <li onClick={()=>setActive('CONTACT')} className={`${active==='CONTACT' ? 'text-[#2C98F0] font-bold underline underline-offset-2': 'hover:bg-gray-200'} cursor-pointer`}>CONTACT</li>
                    </Link>
                </ul>
            </div>

            <div className=''>
                <p className='text-[10px]'>&copy;2025 All rights reserved </p>
            </div>

        </div>
       
    </div>
  )
}

export default SideBar