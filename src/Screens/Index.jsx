import React from 'react'
import Card, { Card2 } from '../Components/Card'
import { FaRegFolderClosed } from "react-icons/fa6";
import { TfiUser, TfiWorld } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Index = () => {
    return (
        <div>
            <div className="image">
                <div className='img-text'>
                    <p className='started'>GET STARTED WITH ONLINR COURSES <br /><span className='best-system'>BEST ONLINE <br />LEARNING SYSTEM</span></p>
                    <p className='text-white text-base mt-9' >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem accusantium doloremque laudantium</p>
                    <button className='text-white bg-transparent border-solid border-2 border-[#19C880] p-3 w-40 mt-5'>Read More</button>
                </div>
                <div className='flex items-center justify-start flex-wrap -mt-[-90px]'>
                    <Card image={<TfiUser size={60} color='#19C880' />} heading='Learn From The Experts' />
                    <Card image={<FaRegFolderClosed size={60} color='#19C880' />} heading='Book Library & Store' />
                    <Card image={<IoBookOutline size={60} color='#19C880' />} heading='Best Course Online' />
                    <Card image={<TfiWorld size={60} color='#19C880' />} heading='Best Industry Leaders' />
                </div>
                <div className='flex justify-center gap-[616px] mt-10'>
                    <h1 className='text-black mt-5'>Featured Courses</h1>
                    <button className='text-black bg-transparent border-solid border-2
                    border-[#19C880] h-[50px] w-[150px] mt-5'>View All</button>
                </div>
                <div className='flex gap-4 mt-10 flex-wrap'>
                    <Card2 image="https://themewagon.github.io/ezuca/images/1.jpg" heading="The Complete Android Developer Course" name="Ms. Lara Croft" date="July 21, 2018" Free="Free" />                    
                    <Card2 image="https://themewagon.github.io/ezuca/images/2.jpg" heading="Learn Photoshop, Web Design & Profitable" name="Ms. Lara Croft" date="July 21, 2018" price="32$" strikethrough="59$" />
                </div>
            </div>
            <div className='relative top-[700px]'>
            <Footer/>
            </div>
        </div>
    )
}

export default Index
