import React from 'react'

const page = () => {
  return (
    <div className='bg-[#2c98f020] px-[70px] w-full'>
        <div className='mt-[100px] '>
            <div className='mb-[50px] flex items-center '>
                <p className='w-[120px]'>
                    ABOUT ME
                </p>
                <div className='w-full h-[2px] bg-[#7D7789] '>
                </div>
                
            </div>
            <h1 className='text-[18px] font-bold '>
                WHO AM I ?
            </h1>
        </div>
        <div className='mt-[30px] text-[#161616] text-justify text-[16px]'>
            <p className='mb-[20px]'>
                <span className='font-bold'>Hi I'm</span>  a Full Stack Developer with a passion for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality. My journey in web development has equipped me with the skills to tackle complex challenges and innovate solutions that meet user needs.
            </p>
            <p>
                I have a strong foundation in HTML, CSS, and JavaScript, complemented by proficiency in frameworks like React and Node.js. My experience includes working with databases, RESTful APIs, and version control systems. I am committed to continuous learning and staying updated with the latest industry trends to enhance my skill set and contribute effectively to any project.
            </p>
        </div>
    </div>
  )
}

export default page