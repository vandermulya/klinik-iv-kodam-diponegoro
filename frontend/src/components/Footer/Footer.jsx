import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiGlobalLine, RiTwitterXFill } from 'react-icons/ri'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
    {
        path: "https://www.youtube.com/@kodam4diponegoro64",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://www.instagram.com/kodam_diponegoro/",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://x.com/KodamIV/",
        icon: <RiTwitterXFill className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://kodam4.mil.id/",
        icon: <RiGlobalLine className='group-hover:text-white w-4 h-5' />,
    },
]

const quickLinks01 = [
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
]

const quickLinks02 = [
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
]

const quickLinks03 = [
    {
        path: "/home",
        display: "Beranda",
    },
    {
        path: "/home",
        display: "Beranda",
    },
]

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='pb-16 pt-10'>
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div className="">
                        <img src={logo} alt="Logo Klinik" />
                        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                            Copyright ©️ {year} | Klinik Pratama Kodam IV/Diponegoro
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' target='_blank'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Quick Links
                        </h2>

                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067ff]'>
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Layanan Klinik
                        </h2>

                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067ff]'>
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Pusat Bantuan
                        </h2>

                        <ul>
                            {quickLinks03.map((item, index) => (
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-[#0067ff]'>
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer