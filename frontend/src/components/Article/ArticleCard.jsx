import React from 'react'

import artCard1 from './../../assets/images/artCard1.jpg'
import userImg from './../../assets/images/avatar-icon.png'
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({className}) => {
    return (
        <>
        <div className={` rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} `}>
            <img src={artCard1} alt="Gambar Postingan Artikel" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
            <div className="p-5">
                <h2 className="font-[600] text-xl text-headingColor md:text-2xl lg:text-[24px]">
                    Tips Menjaga Pola Makan
                </h2>
                <p className="text-textColor mt-3 text-[16px] leading-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, veniam?
                </p>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <img src={userImg} alt="Profil Publisher" className='w-9 h-9 md:w-10 md:h-10' />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-textColor text-sm md:text-base">
                                Guzman Baracke
                            </h4>
                            <div className="flex items-center gap-x-2">
                                <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                                    <BsCheckLg className='w-2.5 h-2.5 text-[#36B37E]' />
                                </span>
                                <span className='text-textColor text-xs md:text-sm'>
                                    Admin
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold text-textColor text-sm md:text-base'>
                        1 Juni
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ArticleCard