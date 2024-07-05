import React from 'react'

import artCard2 from './../../assets/images/artCard2.jpg'
import userImg from './../../assets/images/sample-user.png'
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { stables } from '../../constants';

const VidEduCard = ({ video, className }) => {
    return (
        <>
        <div className={` rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className} `}>
            <Link className='' to={`/video-edukasi/${video.slug}`}>
                <img src={video.photo ? stables.UPLOAD_FOLDER_BASE_URL + video.photo : artCard2} className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' />
            </Link>
            <div className="p-5">
                <Link className='' to={`/video-edukasi/${video.slug}`}>
                    <h2 className="font-[600] text-xl text-headingColor md:text-2xl lg:text-[24px]">
                        {video.title}
                    </h2>
                    <p className="text-textColor mt-3 text-[16px] leading-7">
                        {video.caption}
                    </p>
                </Link>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <img src={video.user.avatar ? stables.UPLOAD_FOLDER_BASE_URL + video.user.avatar : userImg} alt="Profil Publisher" className='w-9 h-9 md:w-10 md:h-10 rounded-full' />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-textColor text-sm md:text-base">
                                {video.user.name}
                            </h4>
                            <div className="flex items-center gap-x-2">
                                <span
                                className={`${
                                    video.user.verified 
                                    ? "bg-[#36B37E]" : "bg-red-600"
                                } w-fit bg-opacity-20 p-1.5 rounded-full`}
                                >
                                {video.user.verified 
                                ? ( <BsCheckLg className="w-2.5 h-2.5 text-[#36B37E]" /> ) 
                                : ( <AiOutlineClose className="w-2.5 h-2.5 text-red-600" /> )}
                                </span>
                                <span className='text-textColor text-xs md:text-sm'>
                                    Penulis {video.user.verified ? "terverifikasi" : "tidak terverifikasi"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold text-textColor text-sm md:text-base'>
                        {new Date(video.createdAt).getDate()} {new Date(video.createdAt).toLocaleString("id-ID", {month: "long"})}
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default VidEduCard