import React from 'react'
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci"
import { TfiUser } from 'react-icons/tfi';

const Card = (props) => {
    const { image, heading } = props
    return (
        <div>
            <div className='bg-white  w-[315px] h-[330px] flex items-start flex-col gap-4 border-r border-b border-[#c0bfbf8c]'>
                <div className='ml-7 mt-5'>{image}</div>
                <h2 className='text-black text-2xl ml-7'>{heading}</h2>
                <p className='text-[grey] ml-7'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                <div className='ml-7 flex gap-2' id='hoverr'><span className='text-[#19c880]'>Read More</span><FaLongArrowAltRight color='#19C880' size='20' /></div>
            </div>
        </div>
    )
}

export default Card



export const Card2 = (props) => {
    const { image, heading, name, date, price, Free, strikethrough } = props
    return (
        <div>
            <div className='flex items-center flex-row border border-[grey] w-[500px]'>
                <div><img src={image} alt="" className='w-[300px] h-[200px]' /></div>
                <div className='flex flex-col gap-3 ml-[35px]'>
                    <div className='flex' id='stars'>
                        <FaStar color='#f3a90b' />
                        <FaStar color='#f3a90b' />
                        <FaStar color='#f3a90b' />
                        <FaStar color='#f3a90b' />
                        <CiStar color='grey' /><span className='text-[grey]'>(4 Votes)</span>
                    </div>
                    <h2 className='text-xl'>{heading}</h2>
                    <p><i><span className='text-[#19c880]'>{name}</span></i>/{date}</p>
                    <div className='flex gap-2 items-center justify-start'>
                        <h4 className='text-[#19c880] text-2xl font-bold'>{price}</h4>
                        <h4 className='text-[#f3a90b] text-2xl font-bold'>{Free}</h4>
                        <s className='text-lg text-[grey]'>{strikethrough}</s>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Card3 = (props) => {
    const { image, heading, name, date, price, strikethrough, Free } = props
    return (
        <div>
            <div className='flex items-center flex-col w-[330px] h-[400px] border border-[grey] gap-10'>
                <div><img src={image} alt="" className='w-[330px] h-[200px]' /></div>
                <div className='flex flex-col gap-3 ml-[40px]'>
                    <h2 className='text-xl'>{heading}</h2>
                    <p><i><span className='text-[#19c880]'>{name}</span></i>/{date}</p>
                    {/* <h4>{price}</h4> */}
                    <div className='flex justify-center items-center gap-4'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h4 className='text-[#19c880] text-2xl font-bold'>{price}</h4>
                            <h4 className='text-[#f3a90b] text-2xl font-bold'>{Free}</h4>
                            <s className='text-lg text-[grey]'>{strikethrough}</s>
                        </div>
                        <div className='flex'>
                            <FaStar color='#f3a90b' />
                            <FaStar color='#f3a90b' />
                            <FaStar color='#f3a90b' />
                            <FaStar color='#f3a90b' />
                            <CiStar color='grey' /><span className='text-[grey]'>(4 Votes)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


