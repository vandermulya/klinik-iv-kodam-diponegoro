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
                <img className='rounded-xl w-full' src={fotoTitleArtikel} alt="Foto Cover Artikel" />
                <Link to="/artikel?category=selectedCategory" className='text-textColor text-sm inline-block mt-4 md:text-base'>
                    KESEHATAN
                </Link>
                <h1 className='text-xl font-[600] mt-4 text-headingColor md:text-[26px]'>
                    Tips Menjaga Pola Makan
                </h1>
                <div className="mt-4 text-slate-700">
                    <p className="leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quae nostrum voluptas corporis exercitationem non suscipit quasi minus sit dolor alias itaque, adipisci ex ipsum molestias voluptatem! Odit debitis quam sit voluptatum architecto facere accusamus nesciunt, quaerat doloremque tenetur repellendus vitae maiores deserunt quod officiis cum consequatur eligendi reprehenderit odio! 
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita dolor ut omnis atque nisi aut, eos odit obcaecati incidunt, modi fugit voluptatum pariatur! Natus, dolore. Id natus, harum, iste corrupti exercitationem enim repudiandae molestias voluptatibus reiciendis nesciunt illo error quis vel, nostrum mollitia ipsam in ullam velit nisi! Est!
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