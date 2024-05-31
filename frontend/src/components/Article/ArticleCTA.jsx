import React from 'react'
import CTAImg from './../../assets/images/cta-image.jpg'

const ArticleCTA = () => {
    return (
        <>
        <svg 
        className="w-full h-auto max-h-40 translate-y-[1px]" 
        preserveAspectRatio="none" 
        viewBox="0 0 2160 263" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path id="Wave" fillRule='evenodd' clipRule="evenodd" 
            d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#fcfcfc" />
        </svg>

        <section className="relative bg-gradient-to-b from-[#fcfcfc] to-[#ffffff] bg-[#f8f7f7] px-5">
            <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
            <div className="col-span-12 lg:col-span-6">
                <h2 className="text-headingColor font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
                Akses informasi kesehatan menarik dalam genggaman Anda
                </h2>
                <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
                <input
                    type="text"
                    className="px-4 py-3 rounded-lg w-full placeholder:text-textColor shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                    placeholder="guzmanbaracke@gmail.com"
                />
                <button className="px-4 py-3 rounded-lg w-full bg-[#0067FF] text-white font-bold md:w-fit md:whitespace-nowrap">
                    Mulai Terhubung!
                </button>
                </div>
                <p className="text-headingColor text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
                <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-textColor">
                    Selangkah di depan
                </span>{" "}
                untuk memulai gaya hidup sehat. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloribus!
                </p>
            </div>
            <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
                <div className="w-3/4 mx-auto relative">
                <div className="w-1/2 h-1/2 bg-[#9771FF] rounded-lg absolute top-[10%] -right-[8%]" />
                <div className="w-1/2 h-1/2 bg-[#01B5C5] rounded-lg opacity-100 absolute -bottom-[10%] -left-[8%]" />
                <div className="w-full rounded-xl bg-[white] p-3 z-[1] relative">
                    <img
                    src={CTAImg}
                    alt="Artikel Vector CTA"
                    className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                    />
                    <div className="p-5">
                    <h2 className="font-bold text-xl text-headingColor md:text-2xl lg:text-[28px]">
                        Tetap terhubung
                    </h2>
                    <p className="text-textColor mt-3 text-sm md:text-lg">
                        Perluas wawasan kesehatan Anda dengan kabar terbaru
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default ArticleCTA