import React from 'react'

import artCard2 from './../../assets/images/artCard2.jpg'
import userImg from './../../assets/images/avatar-icon.png'
import { BsCheckLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

const VidEduCard = ({ className }) => {
    return (
        <>
        <div className={` rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} `}>
            <Link className='' to="/video-edukasi/1">
                <img src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gambar Postingan Artikel" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
            </Link>
            <div className="p-5">
                <h2 className="font-[600] text-xl text-headingColor md:text-2xl lg:text-[24px]">
                    DAGUSIBU
                </h2>
                <p className="text-textColor mt-3 text-[16px] leading-7">
                    Dagusibu adalah singkatan dari Dapatkan, Gunakan, Simpan dan Buang Obat
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

export default VidEduCard