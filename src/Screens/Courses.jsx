import React from 'react'
import Header from '../Components/Header'
import { Card2, Card3 } from '../Components/Card'
import Footer from '../Components/Footer'

const Courses = () => {
  return (
    <div>
           
      <div className='flex items-center justify-between'>
        <h1 className='text-black ml-[105px] text-4xl'>Featured Courses</h1>
        <div className='flex gap-8 mr-[105px] text-xl'>
          <span className='text-[#19c880]'><u>All</u></span>
          <span>Buisness</span>
          <span>Design</span>
          <span>Web Development</span>
          <span>Photography</span>
        </div>
      </div>
      <div className='flex items-center justify-evenly flex-row gap-3 flex-wrap'>
        <Card3 image="https://themewagon.github.io/ezuca/images/1.jpg" heading="The Complete Android Developer Course" name="Ms. Lara Croft" date="July 21, 2018" price="45$" strikethrough="65$"/>
        <Card3 image="https://themewagon.github.io/ezuca/images/2.jpg" heading="The Ultimate Drawing Course Beginner To Advance" name="Michelle Golden" date="March 14, 2018" Free="Free"/>
        <Card3 image="https://themewagon.github.io/ezuca/images/3.jpg" heading="The Complete Digital Marketing Course" name="Ms. Lucius" date="Dec 21, 2018" price="55$" strikethrough="78$"/>
        <Card3 image="https://themewagon.github.io/ezuca/images/4.jpg" heading="The Unreal Engine Developer Course" name="Mr. John Wick" date="Oct 17, 2018" Free="Free"/>
        <Card3 image="https://themewagon.github.io/ezuca/images/5.jpg" heading="Progressive Web Apps (PWA) - The Complete Guide" name="Mr. Tom Redder" date="Sept 14, 2018" price="38$" strikethrough="48$"/>
        <Card3 image="https://themewagon.github.io/ezuca/images/6.jpg" heading="Cryptocurrency Investment Course 2018" name="Russell Stephens" date="Nov 06, 2018" Free="Free"/>
      </div>
      <div className='flex items-center justify-center'>
      <button className='text-black bg-transparent border-solid border-2 border-[#19C880] p-3 w-60 mt-5'>View All Courses</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
