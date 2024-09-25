import React from 'react'
import Header from '../Components/Header'
import { Card2 } from '../Components/Card'
import { MdLocationPin } from 'react-icons/md'
import { FaCalendarAlt } from 'react-icons/fa'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <div>
      <div>
        <h1 className="text-black flex items-center justify-start text-5xl ml-[95px]">Latest News & Events</h1>
      </div>
      <div className="flex items-center justify-evenly flex-row flex-wrap gap-2">
        <div className="flex items-center justify-around flex-col w-[500px] ">
          <img src="https://themewagon.github.io/ezuca/images/event-1.jpg" alt="" />
          <h1 className="text-3xl text-[grey] ml-5">The Complete Financial Analyst Training & Investing Course</h1>
          <div className='flex items-center justify-between gap-9'>
            <div className='flex items-center justify-start'>
              <MdLocationPin color='#19c880' />
              <h4 className='text-[#80808077]'>40 Baria Sreet 133/2 NewYork City, US</h4>
            </div>
            <div className='flex items-center justify-start'>
              <FaCalendarAlt color='#19c880' />
              <h4 className='text-[#80808077]'>10 Dec - 12 dec</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around flex-col gap-4">
          <div className='flex items-center justify-around flex-row gap-4'>
            <div>
              <img src="https://themewagon.github.io/ezuca/images/event-2.jpg" alt="" />
            </div>
            <div className='flex items-start justify-start flex-col'>
              <div className='flex items-center justify-start gap-2'>
                <FaCalendarAlt color='#19c880' />
                <h4 className='text-[#80808077]'>22 Mar 2018</h4>
              </div>
              <h1 className="text-xl text-black ">Persolize Online Learning <br />Experience</h1>
              <span><i className='text-[#19c880]'>Ms. Lara Croft</i> / 02 Comments</span>
              <span className='text-lg text-[#8080808e]'>Excepteur sint occaecat cupidatat non <br /> proident, sunt in culpa qui officia deserunt.</span>
            </div>
          </div>
          <div className='flex items-center justify-around flex-row gap-4'>
            <div>
              <img src="https://themewagon.github.io/ezuca/images/event-3.jpg" alt="" />
            </div>
            <div className='flex items-start justify-start flex-col'>
              <div className='flex items-center justify-start gap-2'>
                <FaCalendarAlt color='#19c880' />
                <h4 className='text-[#80808077]'>22 Mar 2018</h4>
              </div>
              <h1 className="text-xl text-black ">Which investment project should <br />my company choose?</h1>
              <span><i className='text-[#19c880]'>Ms. Lara Croft</i> / 02 Comments</span>
              <span className='text-lg text-[#8080808e]'>Excepteur sint occaecat cupidatat non <br /> proident, sunt in culpa qui officia deserunt.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 w-full flex-row mt-32">
        <div className='flex gap-1'>
          <div className='flex gap-1 flex-col'>
            <div className='flex gap-1 flex-row'>
              <img src="https://themewagon.github.io/ezuca/images/a.jpg" alt="" className='w-[171px] h-[171px]' />
              <img src="https://themewagon.github.io/ezuca/images/b.jpg" alt="" className='w-[171px] h-[171px]' />
            </div>
            <div className='flex'>
              <img src="https://themewagon.github.io/ezuca/images/h.jpg" alt="" className='w-[346px] h-[173.61px]' />
            </div>
          </div>
          <div className='flex gap-1 flex-col'>

            <img src="https://themewagon.github.io/ezuca/images/c.jpg" alt="" className='w-[352px] h-[352px]' />
            <img src="https://themewagon.github.io/ezuca/images/m.jpg" alt="" className='w-[352px] h-[173.61px]' />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flew-row gap-1'>
            <img src="https://themewagon.github.io/ezuca/images/d.jpg" alt="" className='w-[171px] h-[171px]' />
            <img src="https://themewagon.github.io/ezuca/images/e.jpg" alt="" className='w-[171px] h-[171px]' />
            <img src="https://themewagon.github.io/ezuca/images/g.jpg" alt="" className='w-[291px] h-[171px]' />
          </div>
          <div className='flex flex-row gap-1'>
            <div className='flex flex-col gap-1'>
              <img src="https://themewagon.github.io/ezuca/images/i.jpg" alt="" className='w-[171px] h-[171px]' />
              <img src="https://themewagon.github.io/ezuca/images/l.jpg" alt="" className='w-[171px] h-[171px]' />
              {/* <img src="https://themewagon.github.io/ezuca/images/n.jpg" alt="" /> */}
            </div>
            <div className='flex flex-col gap-1'>
              <img src="https://themewagon.github.io/ezuca/images/j.jpg" alt="" className='w-[292px] h-[351px]' />
            </div>
            <div className='flex flex-col gap-1'>
              <img src="https://themewagon.github.io/ezuca/images/k.jpg" alt="" className='w-[171px] h-[171px]' />
              <img src="https://themewagon.github.io/ezuca/images/o.jpg" alt="" className='w-[171px] h-[171px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-1 items-center justify-center ml-[535px]'>
        <img src="https://themewagon.github.io/ezuca/images/n.jpg" alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
