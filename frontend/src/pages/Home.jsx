import React from 'react'

import heroImg01 from '../assets/images/dr-martini-img.png'
import heroImg02 from '../assets/images/dr-maulida-img.png'
import heroImg03 from '../assets/images/drg-denny-img.png'
import icon01 from '../assets/images/poli-umum-img.png'
import icon02 from '../assets/images/poli-gigi-img.png'
import icon03 from '../assets/images/poli-kia_kb-img.png'
import icon04 from '../assets/images/farmasi.png'
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
                                        APLIKASI OBATKU
                                    </h1>
                                    <p className="text__para">
                                        Menjadikan Klinik Pratama pilihan dan terpercaya untuk keluarga besar Kodam IV/Diponegoro dan masyarakat pada umumnya tahun 2025 serta mampu bersaing di era global 2030.
                                    </p>

                                    <Link to="https://api.whatsapp.com/send?phone=+6282322832512&text=Halo, Kak! Saya ingin bertanya terkait obat dan poli di *Klinik Pratama Kodam IV/Diponegoro*. Saya *Nama Anda*, usia saya *Usia Anda* *tahun* dan alamat rumah saya *Alamat Anda*. Terima kasih Kak!" target='_blank'>
                                        <button className='btn'>Tanya Apoteker Kami</button>
                                    </Link>
                                </div>

                                {/* ====== BUSINESS IN NUMBER ====== */}
                                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                                    <div className="">
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>5+</h2>
                                        <span className="w-[50px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                        <p className='text__para'>Tahun berdedikasi</p>
                                    </div>

                                    <div className="">
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>300+</h2>
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
                                    <img className='w-full rounded-xl' src={heroImg01} alt="Dokter Martini" />
                                </div>
                                <div className='mt-[30px]'>
                                    <img className='w-full mb-[30px] rounded-xl' src={heroImg02} alt="Dokter Maulida" />
                                    <img className='w-full rounded-xl' src={heroImg03} alt="Dokter Gigi Denny" />
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
                            <p className='text__para text-center'>Langkah menuju kesehatan prima, dimulai dengan layanan unggul di Klinik Pratama Kodam IV/Diponegoro</p>
                            {/* <p className='text__para text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur, vitae cum perferendis!</p> */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon01} className='w-auto h-[180px] rounded-xl' alt="Gambar Poli Umum" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Poli Umum</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Menyediakan pemeriksaan dan perawatan medis dasar bagi pasien
                                    </p>

                                    {/* <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link> */}
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon02} className='w-auto h-[180px] rounded-xl' alt="Gambar Poli Gigi" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Poli Gigi</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Menyediakan perawatan dan pemeriksaan kesehatan gigi dan mulut pasien
                                    </p>

                                    {/* <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link> */}
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon03} className='w-auto h-[180px] rounded-xl' alt="Gambar Poli KIA/KB" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Poli KIA/KB</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Memberikan perawatan kesehatan bagi ibu hamil, bayi, dan anak-anak
                                    </p>

                                    {/* <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link> */}
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon04} className='w-auto h-[180px] rounded-xl' alt="Gambar Farmasi" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Farmasi</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Menyediakan obat-obatan dan konsultasi terkait penggunaan obat bagi pasien
                                    </p>

                                    {/* <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRight className='group-hover:text-white w-6 h-5' />
                                    </Link> */}
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
                            <h2 className="heading text-center">Fasilitas prioritas kami</h2>
                            <p className='text__para text-center'>Akses kesehatan lebih cepat dan mudah dengan fasilitas prioritas Klinik Pratama Kodam IV/Diponegoro</p>
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
                                        Misi Klinik Pratama <br /> Kodam IV/Diponegoro
                                    </h2>
                                    <ul className="pl-4">
                                        <li className="text__para">
                                            1. Mendukung program pemerintah dalam meningkatkan derajat kesehatan keluarga besar Kodam IV/Diponegoro dan masyarakat
                                        </li>
                                        <li className="text__para">
                                            2. Memberikan pelayanan kesehatan yang bersifat promotif, preventif, dan kuratif
                                        </li>
                                        <li className="text__para">
                                            3. Memberikan pelayanan kesehatan yang bermutu dan berkualitas
                                        </li>
                                        <li className="text__para">
                                            4. Memberikan layanan kesehatan secara paripurna dan berorientasi pada keselamatan pasien
                                        </li>
                                    </ul>
                                    {/* <Link to="/">
                                        <button className='btn'>Selengkapnya</button>
                                    </Link> */}
                                </div>

                                <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                                    <img src={featureImg} alt="Langkah Mudah Mengakses Video Edukasi" />

                                    {/* <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

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
                                    </div> */}
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
                                Percayakan kesehatan Anda kepada tenaga kesehatan berpengalaman dan berdedikasi di Klinik kami
                            </p>
                            {/* <p className='text__para text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa optio quis quidem!
                            </p> */}
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
                                Testimoni positif dari pasien kami adalah bukti dedikasi kami dalam memberikan pelayanan kesehatan terbaik
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
