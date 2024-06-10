import React from 'react'
import obatImg from '../../assets/images/obat-3.png'

const ObatDetailPage3 = () => {
    return (
        <main>
            <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
                <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
                    <div className="hidden md:block large-image">
                        <img
                        className="object-cover cursor-pointer rounded-xl lg:w-[400px] md:w-[200px] lg:h-[400px] md:h-[200px]"
                        src="https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/939360629?file_name=3883428734708450.jpg&v=3&file_sub_location=produk_gambar%2F2022%2F12%2F08"
                        alt="Gambar Obat"
                        />
                    </div>
                    <div className="md:hidden large-image">
                        <img
                        className="w-[100%] h-[300px] object-cover"
                        src="https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/939360629?file_name=3883428734708450.jpg&v=3&file_sub_location=produk_gambar%2F2022%2F12%2F08"
                        alt="snekers-photo"
                        />
                    </div>
                </div>

                <div className="description p-6 md:basis-1/2 md:py-[40px]">
                    <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
                        Detail Data Obat
                    </p>
                    <h1 className="text-3xl md:text-4xl capitalize font-[700]">
                        Amlodipin
                    </h1>
                    <br /><br />

                    <h2 className="text-lg text-left capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Komposisi
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        Amlodipin Besilate  5 mg, 10 mg
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        Amlodipin Besilate  5 mg, 10 mg
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Indikasi Umum
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        Hipertensi, angina pektoris
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        Hipertensi, angina pektoris
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Dosis
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        Dosis awal 1x 5 mg/hari, ditingkatkan hingga maksimal 1x10 mg/hari
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        Dosis awal 1x 5 mg/hari, ditingkatkan hingga maksimal 1x10 mg/hari
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    {/* <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Pemberian
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        These low-profile sneakers are your perfect casual wear <br />
                        companion. Featuring a durable rubber outer sole, they'll <br />
                        withstand everything the weather can offer.
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        These low-profile sneakers are your perfect <br /> casual wear
                        companion. Featuring a durable <br /> rubber outer sole, they'll
                        withstand every - thing the br weather can offer.
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Kontra Indikasi
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        These low-profile sneakers are your perfect casual wear <br />
                        companion. Featuring a durable rubber outer sole, they'll <br />
                        withstand everything the weather can offer.
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        These low-profile sneakers are your perfect <br /> casual wear
                        companion. Featuring a durable <br /> rubber outer sole, they'll
                        withstand every - thing the br weather can offer.
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Perhatian Khusus
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        These low-profile sneakers are your perfect casual wear <br />
                        companion. Featuring a durable rubber outer sole, they'll <br />
                        withstand everything the weather can offer.
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        These low-profile sneakers are your perfect <br /> casual wear
                        companion. Featuring a durable <br /> rubber outer sole, they'll
                        withstand every - thing the br weather can offer.
                    </p>
                    <hr className='border border-[#d8d8d8]' /> */}

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Aturan Pakai
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        Sebelum atau sesudah makan
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        Sebelum atau sesudah makan
                    </p>
                    <hr className='border border-[#d8d8d8]' />

                    <h2 className="text-lg text-left mt-5 capitalize font-[600] mb-[-15px] md:mb-[-30px]">
                        Efek Samping
                    </h2>
                    <p className="hidden md:block text-textColor font-[500] my-10 leading-7">
                        Sakit kepala, edema, letih, somnolen, mual, nyeri perut, wajah memerah, palpitasi, pusing
                    </p>
                    <p className="md:hidden text-textColor font-[500] my-6 leading-7">
                        Sakit kepala, edema, letih, somnolen, mual, nyeri perut, wajah memerah, palpitasi, pusing
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ObatDetailPage3