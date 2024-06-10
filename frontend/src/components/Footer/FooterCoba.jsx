import React from 'react'

import { Link } from 'react-router-dom'
import { RiGlobalLine, RiTwitterXFill } from 'react-icons/ri'
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTikTok } from 'react-icons/ai'
import logo from '../../assets/images/logo.png'

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
        path: "https://kodam4.mil.id/",
        icon: <RiGlobalLine className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://x.com/KodamIV/",
        icon: <RiTwitterXFill className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://www.tiktok.com/@kodam.4.diponegor",
        icon: <AiOutlineTikTok className='group-hover:text-white w-4 h-5' />,
    },
]

const FooterCoba = () => {
    const year = new Date().getFullYear();

    return (
        <section className="bg-none px-0 py-0">
        <footer className="bg-gradient-to-r from-[#cdf1f2] via-[#ffffff] to-[#fff5e0] container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-8">
            <div className="col-span-5 md:col-span-4 lg:col-span-2 md:ml-[80px] lg:ml-[150px]">
            <h3 className="text-headingColor font-bold md:text-lg">Artikel</h3>
            <ul className="text-[#4e535a] text-sm mt-5 space-y-4 md:text-base font-[400]">
                <li>
                <a href="/">Artikel 1</a>
                </li>
                <li>
                <a href="/">Artikel 2</a>
                </li>
                <li>
                <a href="/">Artikel 3</a>
                </li>
                <li>
                <a href="/">Artikel 4</a>
                </li>
            </ul>
            </div>
            <div className="col-span-5 md:col-span-4 lg:col-span-2 md:ml-[40px] lg:ml-[80px]">
            <h3 className="text-headingColor font-bold md:text-lg">Data Obat</h3>
            <ul className="text-[#4e535a] text-sm mt-5 space-y-4 md:text-base font-[400]">
                <li>
                <a href="/">Obat 1</a>
                </li>
                <li>
                <a href="/">Obat 2</a>
                </li>
                <li>
                <a href="/">Obat 3</a>
                </li>
                <li>
                <a href="/">Obat 4</a>
                </li>
            </ul>
            </div>
            <div className="col-span-5 md:col-span-4 lg:col-span-1 md:ml-[5px] lg:ml-[5px]">
            <h3 className="text-headingColor font-bold md:text-lg">Video Edukasi</h3>
            <ul className="text-[#4e535a] text-sm mt-5 space-y-4 md:text-base font-[400]">
                <li>
                <a href="/">Video 1</a>
                </li>
                <li>
                <a href="/">Video 2</a>
                </li>
                <li>
                <a href="/">Video 3</a>
                </li>
                <li>
                <a href="/">Video 4</a>
                </li>
            </ul>
            </div>
            <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-3">
                <img
                    src={logo}
                    alt="Logo Klinik"
                    className='mx-auto md:mx-0'
                />
                <p className="text-sm text-[#4e535a] text-center mt-4 md:text-left md:text-base lg:text-sm">
                    Copyright © {year} | Klinik Pratama Kodam IV/Diponegoro
                </p>
                <div className="flex justify-center items-center mt-5 space-x-4 text-headingColor md:justify-start">
                    {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' target='_blank'>
                                    {link.icon}
                                </Link>
                            ))}
                </div>
            </div>
        </footer>
    </section>
    )
}

export default FooterCoba