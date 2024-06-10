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
        link: '/artikel/2'
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

const ArticleDetailPage2 = () => {
    return (
        <>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbsData} />
                <img className='rounded-xl w-full' src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto Cover Artikel" />
                <Link to="/artikel?category=selectedCategory" className='text-textColor text-sm inline-block mt-4 md:text-base'>
                    KESEHATAN
                </Link>
                <h1 className='text-xl font-[600] mt-4 text-headingColor md:text-[26px]'>
                    Bijak Menggunakan Antibiotik
                </h1>
                <div className="mt-4 text-slate-700">
                    <p className="leading-7">
                        Apa itu Antibiotik? <br />
                        Antibiotik adalah Obat yang dapat membunuh dan mencegah pertumbuhan bakteri penyebab penyakit atau infeksi. Obat ini hanya boleh dibeli dengan resep dokter dan digunakan sesuai petunjuk dokter. Antibiotik  hanya digunakan untuk infeksi yang disebabkan oleh bakteri.
                        <br /><br />
                        Resistensi antibiotika terjadi ketika bakteri tidak merespon obat untuk membunuhnya. Adanya resistensi antibiotika, menyebabkan penurunan kemampuan antibiotik tersebut dalam mengobati infeksi penyakit pada manusia. Penggunaan antibiotik yang tepat dan bijak dapat mengurangi tingkat resistensi. Salah satu penyebab utama resistensi antibiotik adalah penggunaan antibiotik yang berlebihan atau tidak tepat. Maka peranan Farmasis dalam hal ini menjadi sangat penting dalam hal memberikan informasi obat antibiotika kepada pasien. Penggunaan antibiotik yang disiplin sesuai aturan pakai akan meningkatkan kualitas kesehatan pasien, sebaliknya penggunaan tanpa aturan mengakibatkan keefektifan dari antibiotik akan berkurang.
                        <br /><br />
                        Penggunaan Antibiotik yang Baik dan Tepat <br />
                        Beberapa cara penggunaan antibiotik yang baik dan tepat untuk mencegah terjadinya resistensi antibiotik: <br />
                        1. Tidak membeli antibiotik sendiri tanpa resep dokter <br />
                        2. Tidak menggunakan antibiotik untuk infeksi selain bakteri <br />
                        3. Tidak menyimpan/menyetok antibiotik di rumah <br />
                        4. Tidak memberikan antibiotik sisa ke orang lain <br />
                        5. Tanyakan pada Apoteker informasi obat antibiotik <br />
                        6. Habiskan antibiotik sesuai dengan aturan pakai.
                        <br /><br />
                        Aturan Penggunaan Antibiotik <br />
                        Penggunaan antibiotik harus memperhatikan waktu, frekuensi dan lama pemberian. Aturan minum antibiotik yang benar. Membagi waktu 1 hari (24 jam) dengan berapa kali antibiotik harus digunakan dalam sehari, misalnya: <br />
                        1. 3x sehari artinya setiap 8 jam yakni jam 6 pagi, jam 2 siang, dan jam 10 malam. <br />
                        2. 2x sehari artinya setiap 12 jam yakni jam 6 pagi dan jam 6 sore. <br />
                        3. 1x sehari artinya setiap 24 jam yakni jam 6 pagi dan jam 6 pagi hari berikutnya. <br />
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

export default ArticleDetailPage2