import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
    return (
        <>
            {/* ============= HERO SECTION START ============= */}
                <section className="hero__section pt-[60px] 2xl:h-[800px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                            {/* ====== HERO CONTENT ====== */}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]'>
                                        Mitra sehat Anda untuk menuju hidup yang lebih baik!
                                    </h1>
                                    <p className="text__para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero fugiat magnam porro, sapiente, tempore cumque autem corrupti amet, dolorem saepe nemo placeat aspernatur distinctio.
                                    </p>

                                    <button className='btn'>Tanya Apoteker Kami</button>
                                </div>

                                {/* ====== BUSINESS IN NUMBER ====== */}
                                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                                    <div className="">
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>20+</h2>
                                        <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                        <p className='text__para'>Tahun berdedikasi</p>
                                    </div>

                                    <div className="">
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>500+</h2>
                                        <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                        <p className='text__para'>Pasien terobati</p>
                                    </div>

                                    <div className="">
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                        <p className='text__para'>Kepuasan pasien</p>
                                    </div>

                                </div>
                            </div>

                            {/* ====== HERO CONTENT ====== */}
                            <div className="flex gap-[30px] justify-end">
                                <div>
                                    <img className='w-full' src={heroImg01} alt="Dokter 01" />
                                </div>
                                <div className='mt-[30px]'>
                                    <img className='w-full mb-[30px]' src={heroImg02} alt="Dokter 02" />
                                    <img className='w-full' src={heroImg03} alt="Dokter 03" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============= HERO SECTION END ============= */}
                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto">
                            <h2 className='heading text-center'>
                                Kami melayani dengan kualitas mutu terbaik
                            </h2>
                            <p className='text__para text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur, vitae cum perferendis!</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon01} alt="Service 01" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Layanan 1</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deserunt quisquam repellat atque optio.</p>

                                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon02} alt="Service 02" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Layanan 2</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deserunt quisquam repellat atque optio.</p>

                                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon03} alt="Service 03" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Layanan 3</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deserunt quisquam repellat atque optio.</p>

                                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <About />
                {/* ============= SERVICES SECTION START ============= */}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Layanan prioritas kami</h2>
                            <p className='text__para text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa optio quis quidem!</p>
                        </div>
                        
                        <ServiceList />
                    </div>
                </section>
                {/* ============= SERVICES SECTION END ============= */}

                {/* ============= FEATURES SECTION START ============= */}
                    <section>
                        <div className="container">
                            <div className="flex items-center justify-between flex-col lg:flex-row">
                                <div className="xl:w-[670px]">
                                    <h2 className="heading">
                                        Pertajam informasi Anda <br /> dengan video edukasi.
                                    </h2>
                                    <ul className="pl-4">
                                        <li className="text__para">
                                            1. Lorem ipsum dolor sit amet.
                                        </li>
                                        <li className="text__para">
                                            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, ab?
                                        </li>
                                        <li className="text__para">
                                            3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate nulla corrupti.
                                        </li>
                                    </ul>
                                    <Link to="/">
                                        <button className='btn'>Selengkapnya</button>
                                    </Link>
                                </div>

                                <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                                    <img src={featureImg} alt="Langkah Mudah Mengakses Video Edukasi" />

                                    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-[6px] lg:gap-3">
                                                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                                    Kamis, 23
                                                </p>
                                                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                                    10:21 WIB
                                                </p>
                                            </div>
                                            <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                                                <img src={videoIcon} alt="Icon Video Edukasi" />
                                            </span>
                                        </div>

                                        <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                            Tonton Video
                                        </div>

                                        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                            <img src={avatarIcon} alt="Icon Profile" />
                                            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                                                Andika Suherman
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* ============= FEATURES SECTION END ============= */}

                {/* ============= GREAT DOCTORS START ============= */}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Para tenaga ahli kami</h2>
                            <p className='text__para text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa optio quis quidem!
                            </p>
                        </div>
                        <DoctorList />
                    </div>
                </section>
                {/* ============= GREAT DOCTORS END ============= */}

                {/* ============= FAQ SECTION START ============= */}
                <section>
                    <div className="container">
                        <div className="flex justify-between gap-[50px] lg:gap-0">
                            <div className="w-1/2 hidden md:block">
                                <img src={faqImg} alt="FAQ Featured Picture" />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="heading">
                                    Seputar pertanyaan yang sering diajukan oleh pasien kami
                                </h2>

                                <FaqList />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= FAQ SECTION END ============= */}

                {/* ============= TESTIMONI START ============= */}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Apa kata mereka</h2>
                            <p className='text__para text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa optio quis quidem!
                            </p>
                        </div>

                        <Testimonial />
                    </div>
                </section>
                {/* ============= TESTIMONI END ============= */}
        </>
    )
}

export default Home