import React from 'react'
import {FaFacebook, FaGoogle, FaHardHat, FaHeart, FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-8 ">
                {/* company details section */}
                <div       
                data-aos="fade-up"
                className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Orange Mint</h1>
                    <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Quas recusandae consectetur, numquam nostrum rerum rem, 
                         accusantium omnis eum minus sint, officiis provident perspiciatis. 
                        At dolorum libero eius nihil magni recusandae.</p>
                </div>
                {/* Navlink section  */}
                <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className='space-y-6'>
                <h1 className='text-4xl font-bold'>Quick Links</h1>
                <div className='grid grid-cols-2  gap-3'>
                    {/* First column links */}
                    <div>
                        <ul className='space-y-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Search Fruits</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Second column links */}
                    <div>
                        <ul className='space-y-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Search Fruits</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                </div>


                {/* Social link section  */}
                <div 
                data-aos="fade-up"
                data-aos-delay="500"
                className='space-y-6'>
                <h1 className='text-4xl font-bold'>Follow Us</h1>
                <div>
                    <p>+1 (123) 456-7890</p>
                    <p>Noida, Uttar Pradesh</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                </div>
             </div>
        </div>
        {/* copyright section  */}
        <p className='text-white text-center mt-8 pt-8
        border-t-2'>
            Copyright @copy:2024 Company Name. All rights reserverd <br />Priya Sonkar  
        </p>
    </div>
</div>
  )
}

export default Footer