'use client'
import React, { useState, useRef } from 'react'
import { FaPhone,FaMapMarkerAlt  } from "react-icons/fa";
import { MdMarkEmailUnread  } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


const page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const emailRef = useRef(null);
    const nameRef = useRef(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z.\s]*$/;

  const handleNameChange = (e) => {    
    setName( e.target.value);
    if(nameRegex.test(name)){
      nameRef.current.classList.remove("border-red-500");
      nameRef.current.classList.add("border-[#7D7789]");
      nameRef.current.style.outline = "none";
    } 

  }
  const handleEmailChange = (e) => {    
    setEmail( e.target.value);
    if(emailRegex.test(email)){
      emailRef.current.classList.remove("border-red-500");
      emailRef.current.classList.add("border-[#7D7789]");
      emailRef.current.style.outline = "none";
    } 
    
    
  }
  const handleSubjectChange = (e) => {
    setSubject( e.target.value);
  }
  const handleMessageChange = (e) => {
    setMessage( e.target.value);
  }

  const handleSendMessage = () =>{  

    if(!nameRegex.test(name)){
      toast.error("enter a valid name (letters, spaces and dots only)");
      nameRef.current.classList.add("border-red-500");
      nameRef.current.style.outline = "2px solid #EF4444";
    }   

    if(!emailRegex.test(email)){
      toast.error("enter a valid Email.");
      emailRef.current.classList.add("border-red-500");
      emailRef.current.style.outline = "2px solid #EF4444";
    }  

    if(name || email || subject || message){
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }else{
      toast.error("Please fill all the fields!");
    }
  }
  

  return (
    <div className='bg-[#2c98f020] px-[70px] w-full '>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      pauseOnHover
      theme="light"
      />
      <div>
        <div className='mt-[100px] '>
            <div className='mb-[50px] flex items-center'>
                <p className='w-[120px]'>
                    CONTACT
                </p>
                <div className='w-full h-[2px] bg-[#7D7789]'>
                </div>
                
            </div>
        </div>
        <div className='flex justify-between w-full'>
          <div className='w-[40%] gap-y-2 flex flex-col'>
            
            <p className=' border-[#7D7789] border-1 h-[100px] pl-[20px] flex items-center gap-x-2'><FaPhone className="text-[#2C98F0] text-2xl" />01902131906</p>
            <p className=' border-[#7D7789] border-1 h-[100px] pl-[20px] flex items-center gap-x-2'>  <FaMapMarkerAlt className="text-[#2C98F0] text-2xl"/>webandappdev.sabbir@gmail.com</p>
            <p className=' border-[#7D7789] border-1 h-[100px] pl-[20px] flex items-center gap-x-2'><MdMarkEmailUnread className="text-[#2C98F0] text-3xl"/>Daffodil Smart City, Birulia, Savar, Dhaka-1216, Bangladesh</p>    
            
            
          </div>



          <div className='w-[40%]'>
            <div className='flex flex-col gap-y-2'>
              
                <input ref={nameRef} value={name} type="text" className='border-1 w-full  placeholder-[#555555] pl-5 py-3' placeholder='NAME'  onChange={handleNameChange}/>
                <input ref={emailRef} value={email} type="email" className='border-1 w-full  placeholder-[#555555] pl-5 py-3' placeholder='Email' onChange={handleEmailChange}/>
                <input type="text" value={subject} className='border-1 w-full  placeholder-[#555555] pl-5 py-3' placeholder='Subject' onChange={handleSubjectChange}/>
                <textarea value={message} className='border-1 w-full  placeholder-[#555555] pl-5 py-3 h-[120px]' placeholder='Message' onChange={handleMessageChange}/>
                <button className='bg-[#2C98F0] text-white w-full py-3 mt-2 hover:bg-[#1b6fbf] cursor-pointer' onClick={handleSendMessage}>Send Message</button>
              

            </div>
          </div>

        </div>
      </div>
      

    </div>
  )
}

export default page