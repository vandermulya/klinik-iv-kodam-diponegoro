import React from 'react'
import fotoTitleArtikel from './../../assets/images/artCard3.jpg'
import fotoTitleArtikel2 from './../../assets/images/artCard2.jpg'
import { Link } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/Comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialMedia/SocialShareButtons'


const breadCrumbsData = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "Artikel",
        link: '/artikel'
    },
    {
        name: "Halaman Artikel",
        link: '/artikel/1'
    },
]

const postsData = [
    {
        _id: "1",
        image: fotoTitleArtikel2,
        title: "Cara Hidup Sehat",
        createdAt: "2024-06-01T00:00:00.607+0000"
    },
    {
        _id: "2",
        image: fotoTitleArtikel2,
        title: "Cara Hidup Sehat",
        createdAt: "2024-08-01T00:00:00.607+0000"
    },
    {
        _id: "3",
        image: fotoTitleArtikel2,
        title: "Cara Hidup Sehat",
        createdAt: "2024-12-01T00:00:00.607+0000"
    },
]

const tagsData = [
    "Kesehatan", "Mental", "Edukasi", "Gaya Hidup", "Edukasi",
]

const ArticleDetailPage = () => {
    return (
        <>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData} />
                <img className='rounded-xl w-full' src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto Cover Artikel" />
                <Link to="/artikel?category=selectedCategory" className='text-textColor text-sm inline-block mt-4 md:text-base'>
                    KESEHATAN
                </Link>
                <h1 className='text-xl font-[600] mt-4 text-headingColor md:text-[26px]'>
                    APA ITU DAGUSIBU?
                </h1>
                <div className="mt-4 text-slate-700">
                    <p className="leading-7">
                        Dagusibu adalah singkatan dari Dapatkan, Gunakan, Simpan dan Buang Obat dengan benar yang ditujukan agar masyarakat lebih paham mengenai obat. 
                        <br /><br />
                        DAPATKAN, 
                        Pastikan mendapatkan obat di tempat yang terjamin mutu dan kualitas (obat asli dan berkhasiat) yaitu dari Apotik, Instalasi Farmasi di Rumah Sakit, Puskesmas, Klinik, dan Toko Obat Berijin. Selain obat lebih terjamin, di tempat tersebut kita juga mendapat informasi detail tentang obat yang dikonsumsi dari Apoteker yang berpraktek.
                        <br /><br />
                        GUNAKAN, 
                        Pastikan setelah mendapatkan obat, selanjutnya anda harus memperhatikan petunjuk penggunaan obat yang tertera pada kemasan. Bacalah dengan saksama dan perhatikan tanggal kadaluarsa. Obat tidak untuk pemakaian secara terus menerus, gunakan obat sesuai anjuran dokter atau yang tertera pada brosur atau etiket, hentikan pemakaian obat jika timbul hal-hal yang tidak diinginkan, jangan menggunakan obat orang lain walaupun gejala penyakitnya sama, tanyakan pada Apoteker untuk mengetahui informasi yang lebih lengkap mengenai penggunaan obat.
                        <br /><br />
                        SIMPAN, 
                        Agar obat dapat digunakan hingga masa kadaluarsa sebaiknya di simpan dengan petunjuk penyimpanan yang tepat. Simpan di tempat yang tidak terkena matahari langsung, kering dan tidak lembab agar kualitas obat tetap terjaga (untuk sediaan suppositoria disimpan dalam lemari pendingin). Perlu diperhatikan tempat penyimpanan jauh dari jangkauan anak-anak, simpan obat sesuai petunjuk pada kemasan obat. Simpan obat sesuai dengan  kemasan aslinya dan memastikan obat tersebut tertutup rapat agar terhindar dari kontaminasi.
                        <br /><br />
                        BUANG,  
                        Pembuangan obat merupakan kegiatan dalam menyelesaikan masalah obat yang sudah tidak dipakai karena kadaluarsa, atau rusak. Ciri-cirinya adalah telah melewati tanggal waktu kadaluwarsa dan obat tersebut telah berubah rasa, bau dan warna. Obat yang telah kadaluarsa atau rusak tidak boleh dibuang sembarangan karena beresiko disalahgunakan atau tidak sengaja terminum oleh orang. Cara membuang obat dirumah, pisahkan isi obat dengan kemasan, lepaskan etiket dan tutup dari wadah atau botol, buang secara terpisah, buang obat cair ke saluran air yang mengalir, buang obat padat dengan mengancurkan terlebih dahulu obat dan pendam dalam tanah, buang kemasan obat atau pembungkus obat setelah digunting.
                    </p>
                </div>
                <CommentsContainer className="mt-10" logginedUserId="a" />
            </article>

            <div className="">
                <SuggestedPosts className="mt-8 lg:mt-0 lg:max-w-xs" header="Artikel Terbaru" posts={postsData} tags={tagsData} />
                <div className="mt-7">
                    <h2 className="font-medium text-headingColor mb-4 md:text-xl">
                        Bagikan di:
                    </h2>
                    <SocialShareButtons url={encodeURI(
                        "https://kodam4.mil.id/"
                    )} title={encodeURIComponent(
                        "Coba Share Medsos"
                    )} />
                </div>
            </div>
        </section>
        </>
    )
}

export default ArticleDetailPage