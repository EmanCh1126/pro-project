import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'> About Us </h3>
            <p>C2tec is dedicated to enhancing coding skills and fostering a community of developers. Our platform offers resources, tutorials, and mentorship to guide you on your Digital marketing journey.</p>
        </div>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'>Links</h3>
            <ul>
                <li><a href="/"  className='hover:text-slate-300'>Home</a></li>
                <li><a href="/Courses" className='hover:text-slate-300'>Courses</a></li>
                <li><a href="/About" className='hover:text-slate-300'>About</a></li>
                <li><a href="/Contact" className='hover:text-slate-300'>Contact</a></li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'>Follow Us</h3>
            <ul>
                <li><a href="https://www.instagram.com/emanchaudhary1126/profilecard/?igsh=djd1Y3lkemhlMmQx"className='hover:text-slate-300'>Instagram</a></li>
                <li><a href="https://www.facebook.com/eman.chaudhary1126" className='hover:text-slate-300'>Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/eman-chaudhary-4a1b96330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-slate-300'>LinkedIn</a></li>
                <li><a href="https://www.tiktok.com/@eman.chaudhary1126?_t=8qBgDJuo590&_r=1" className='hover:text-slate-300'>Tiktok</a></li>
                <li><a href="https://github.com/EmanCh1126" className='hover:text-slate-300'>Github</a></li>
            </ul>
            </div>
            <div>
            <h3 className='text-lg font-bold text-white mb-4'>Contact Us</h3>
                <p>Email: <a href="/.mail@gmail.com" className='hover:text-white'>humaimachoudhary123@gmail.com</a></p>
                <p>Phone: <span className='hover:text-white'>0347-7679960</span></p>
            </div> 
        </div>
        <div>
            <p className='flex justify-center p-2'>
               Master the Craft of Coding. </p>
        </div>
    </footer>
  )
}

export default Footer