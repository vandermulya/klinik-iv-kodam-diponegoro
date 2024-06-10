import React from 'react'

import aboutImg from '../../assets/images/apt-dewi-img.png'
import aboutCardImg from '../../assets/images/card-name-apoteker.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* ======== ABOUT IMAGES ======== */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} className='rounded-xl' alt="Apoteker Dewi Sukmasari" />
                        <div className="absolute z-20 bottom-6 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[15%]">
                            <img src={aboutCardImg} className='rounded-xl w-[170px] sm:w-44 md:w-52 lg:w-60 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' alt="" />
                        </div>
                    </div>

                    {/* ======== ABOUT CONTENT ======== */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Tata nilai kami tertuang untuk melayani negeri</h2>
                        {/* <h2 className="heading">Bangga melayani negeri dengan sepenuh hati!</h2> */}

                        <p className='text__para'>
                            1. Senyum dalam setiap pelayanan
                        </p>
                        <p className='text__para'>
                            2. Ikhlas memberikan layanan dengan tulus dan ramah
                        </p>
                        <p className='text__para'>
                            3. Akuntabel selalu menjaga mutu pelayanan dan keselamatan pasien
                        </p>
                        <p className='text__para'>
                            4. Profesional memiliki kompetensi dan kemampuan dalam memberikan pelayanan kesehatan terbaik
                        </p>
                        
                        {/* <p className='text__para mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem unde ipsa dicta? Iusto delectus consequatur aspernatur architecto laborum corporis repellat ut nostrum, eveniet quibusdam!</p> */}

                        <Link to='https://api.whatsapp.com/send?phone=+6282322832512&text=Halo, Kak! Saya ingin bertanya terkait obat dan poli di *Klinik Pratama Kodam IV/Diponegoro*. Saya *Nama Anda*, usia saya *Usia Anda* *tahun* dan alamat rumah saya *Alamat Anda*. Terima kasih Kak!' target='_blank'>
                            <button className='btn'>Tanya Apoteker</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About