import React, { useState  } from 'react';
import imgdrmaulida from '../assets/images/no-bg-dr-maulida.png'
import logowhatsapp from '../assets/images/logo-wa.png'
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCloseCircle } from "react-icons/io";
import FooterCoba from '../components/Footer/FooterCoba';

const Telemedicine = () => {
    const [showMessage, setShowMessage] = useState(true);

    return (
        <>
            {/* SECTION HEADER KOMPONEN PAGE TELEMEDICINE */}
            <section className="container w-full h-auto bg-gradient-to-r from-[#cdf1f2] via-[#ffffff] to-[#fff5e0] mx-auto flex flex-col px-5 py-5 lg:flex-row lg:items-center">
                {/* Text Content */}
                <div className="mt-10 lg:w-1/2">
                    <h1 className="text-3xl font-bold text-center text-headingColor md:text-5xl lg:text-left lg:max-w-[540px] lg:text-4xl xl:text-5xl">
                        Konsultasi dengan tenaga medis ahli kami!
                    </h1>
                    <p className="mt-4 text-base text-center text-textColor md:text-xl lg:text-left xl:text-xl">
                        Konsultasikan segala keluhan yang berkaitan dengan kesehatan Anda 
                        dengan tenaga medis kami yang akan sedia selalu membantu Anda!
                    </p>
                </div>

                {/* Video Content */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="w-full max-w-lg aspect-w-16 aspect-h-9 mt-6 mb-3 lg:my-0 lg:mr-12 lg:ml-24">
                        <iframe
                            className="aspect-video w-full rounded-xl shadow-xl"
                            src="https://www.youtube-nocookie.com/embed/fHfO7DMGrZg?si=Rbje_Rz-G8Suup2P"
                            title="Video Tutorial Telemedicine Klinik Kodam IV Diponegoro"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Tenaga medis kami</h2>
                            <p className='text__para text-center'>
                                Bertemu dengan para tenaga medis <br /> Klinik Pratama Kodam IV/Diponegoro!
                            </p>
                    </div>
                </div>
                
                <br /><br /><br /><br />

                <div className="container grid place-items-center">
                    <div className=" w-full lg:w-[400px] group cursor-pointer active:opacity-70 transition-opacity duration-300">

                        {/* Title Profile Card */}
                        <div className="relative group bg-black rounded-t h-[100px] lg:h-[50px] lg:group-hover:h-[100px] transition-all duration-300">
                            <img 
                                src="https://images2.imgbox.com/73/ff/LZFjQ6ul_o.jpg" 
                                alt="Background Profile Picture dr. Maulida" 
                                className="w-full h-full object-cover opacity-60 lg:opacity-40 lg:group-hover:opacity-60 transition duration-300"/>
                            <img 
                                src={imgdrmaulida} 
                                alt="Profile Picture dr. Maulida" 
                                className="object-cover absolute w-[160px] bottom-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-0 lg:translate-y-3/4 lg:group-hover:translate-y-0 transition duration-300"/>
                            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-40 lg:left-5 lg:group-hover:left-44 text-white font-bold text-xl lg:text-2xl transition-all duration-300">
                                dr. Maulida Hayati
                            </h1>
                        </div>

                        {/* Body Profile Card */}
                        <div className="min-h-[100px] py-3 px-4 bg-white rounded-b relative z-10 shadow text-gray-600 flex flex-col items-center justify-center">
                            <div className="font-semibold mb-3 text-center">
                                <p>Pelayanan hari Senin s.d. Jumat</p>
                                <p>Jam pelayanan 06.00 s.d. 09.00 WIB</p>
                            </div>
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=+6281234664466&text=Halo dokter, saya ingin konsultasi:%0A- Nama:%0A- Jenis Kelamin:%0A- Tempat, Tanggal Lahir:%0A- NIK:%0A- No. BPJS:%0A- Alamat:%0A- Pangkat/Golongan (Militer/PNS):%0A- Satuan:%0A- NRP/NIP:%0A- Tinggi badan:%0A- Berat badan:%0A- Keluhan saat ini:%0A- Riwayat obat:%0A- Riwayat penyakit terdahulu:%0A- Riwayat alergi:" 
                            className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-lg font-medium hover:bg-green-600 transition duration-300">
                                {/* Untuk gawai dan tablet */}
                                <FaWhatsapp className="text-xl lg:hidden" />
                                {/* Untuk laptop/komputer */}
                                <FaWhatsapp className="hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 lg:transition lg:duration-300" />
                                <span>Mulai Konsultasi</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Floating Button */}
                <div className="fixed bottom-4 right-4 flex flex-col items-center z-50">
                    {/* Chat message for larger screens */}
                    <div className="hidden lg:block">
                        <div className={`bg-gray-700 text-white leading-5 text-[16px] py-2 px-3 rounded-lg mb-2 transition-opacity duration-300 ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
                            Ada yang bisa kami bantu?
                        </div>
                    </div>
                        
                    {/* Floating button */}
                    <a 
                        href="https://api.whatsapp.com/send?phone=+6282327114644&text=Halo, saya memiliki kendala pada telemedicine Klinik Pratama Kodam IV/Diponegoro." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
                        onMouseEnter={() => setShowMessage(true)}
                        onMouseLeave={() => setShowMessage(false)}
                    >
                        <img src={logowhatsapp} alt="WhatsApp Logo" className="w-8 h-8"/>
                    </a>
                </div>

                {/* Show message initially on mobile/tablet */}
                {showMessage && (
                    <div className="fixed bottom-20 right-4 bg-gray-700 text-white text-sm py-2 px-3 rounded-lg shadow-lg z-50 flex items-center justify-between lg:hidden">
                        <span>Ada yang bisa kami bantu?</span>
                        <button onClick={() => setShowMessage(false)} className="ml-3 text-white">
                            <IoIosCloseCircle size={20} className='text-center justify-center' />
                        </button>
                    </div>
                    )}
            </div>

            <FooterCoba />
        </>
    );
};

export default Telemedicine