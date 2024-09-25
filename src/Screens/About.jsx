import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-around'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-[black]'>
            About Ezuca
          </h1>
          <p className='text-[#757686] text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium</p>
          <div className='flex flex-row gap-10'>
            <p className='text-[#19c880]'><span className='text-6xl'>50</span><span className='text-3xl'>M+</span><br /><span className='text-[#757686]'>STUDENTS LEARNING</span></p>
            <p className='text-[#19c880]'><span className='text-6xl'>30</span><span className='text-3xl'>K+</span><br /><span className='text-[#757686]'>ACTIVE COURSE</span></p>
          </div>
          <div className='flex flex-row gap-10'>
            <p className='text-[#19c880]'><span className='text-6xl'>340</span><span className='text-3xl'>M+</span><br /><span className='text-[#757686]'>INSTRUCTORS ONLINE</span></p>
            <p className='text-[#19c880]'><span className='text-6xl'>30</span><span className='text-3xl'>+</span><br /><span className='text-[#757686]'>COUNTRY REACHED</span></p>
          </div>
        </div>
        <div className='mt-5' >
          <div className='border rounded-full bg-[#19c880] w-[60px] h-[60px] absolute top-[350px] right-[620px]'><img src="https://themewagon.github.io/ezuca/images/video-icon.png" alt="" /></div>
          <img src="https://themewagon.github.io/ezuca/images/video-screenshot.png" alt="" />
        </div>
      </div>

      
      <Footer />
    </div>
  )
}

export default About
