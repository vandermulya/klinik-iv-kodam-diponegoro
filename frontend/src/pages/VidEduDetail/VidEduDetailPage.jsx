import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query'

import fotoTitleArtikel2 from './../../assets/images/artCard3.jpg'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SuggestedPosts from './container/SuggestedPosts'
import SocialShareButtons from '../../components/SocialMedia/SocialShareButtons'
import { getAllVideos, getSingleVideo } from '../../services/index/videos';
import VidEduDetailSkeleton from './components/VidEduDetailSkeleton';
import ErrorMessage from '../../components/ErrorMessage';
import Editor from '../../components/editor/Editor';
import parseJsonToHtml from '../../utils/parseJsonToHtml';

// const breadCrumbsData = [
//     {
//         name: "Home",
//         link: '/'
//     },
//     {
//         name: "Video Edukasi",
//         link: '/video-edukasi'
//     },
//     {
//         name: "Halaman Video Edukasi",
//         link: '/video-edukasi/1'
//     },
// ]

// const postsData = [
//     {
//         _id: "1",
//         image: fotoTitleArtikel2,
//         title: "Cara Hidup Sehat",
//         createdAt: "2024-06-01T00:00:00.607+0000"
//     },
//     {
//         _id: "2",
//         image: fotoTitleArtikel2,
//         title: "Cara Hidup Sehat",
//         createdAt: "2024-08-01T00:00:00.607+0000"
//     },
//     {
//         _id: "3",
//         image: fotoTitleArtikel2,
//         title: "Cara Hidup Sehat",
//         createdAt: "2024-12-01T00:00:00.607+0000"
//     },
// ]

// const tagsData = [
//     "Kesehatan", "Gaya Hidup", 
// ]

const VidEduDetailPage = () => {
    const { slug } = useParams();
    const userState = useSelector((state) => state.user);
    const [breadCrumbsData, setbreadCrumbsData] = useState([]);
    const [body, setBody] = useState(null);

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getSingleVideo({ slug }),
        // queryKey: ["blog", slug],
        queryKey: ["videdu", slug],
        onSuccess: (data) => {
            setbreadCrumbsData([
                { name: "Beranda", link: "/" },
                { name: "Video Edukasi", link: "/video-edukasi" },
                { name: "Halaman Video Edukasi", link: `/video-edukasi/${data.slug}` },
            ]);
            setBody(parseJsonToHtml(data?.body));
        },
    });

    const { data: postsData } = useQuery({
        queryFn: () => getAllVideos(),
        queryKey: ["videos"],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        {isLoading ? (
            <VidEduDetailSkeleton />
        ) : isError ? (
            <ErrorMessage message={"Whoops.. Tidak dapat mengambil detail video :("}/>
        ) : (
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                    <BreadCrumbs data={breadCrumbsData} />
                    {/* <img className='rounded-xl w-full' src={data?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                        : fotoTitleArtikel
                    } alt={data?.title} /> */}
                    <iframe className='rounded-xl w-full h-[188px] lg:w-[640px] md:w-full lg:h-[360px] md:h-[434px] border-none focus:border-none' src={`https://www.youtube.com/embed/${data?.vidurl}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <div className="mt-4 flex gap-2">
                        {data?.categories.map((category) => (
                            <Link to={`/video-edukasi?category=${category.name}`} className='text-textColor text-sm inline-block mt-4 md:text-base'>
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <h1 className='text-xl font-[600] mt-4 text-headingColor md:text-[26px]'>
                        {data?.title}
                    </h1>

                    <div className="w-full mt-5">
                        {!isLoading && !isError && (
                            <Editor content={data?.body} editable={false} />
                        )}
                    </div>
                </article>

                <div className="">
                    <SuggestedPosts className="mt-8 lg:mt-0 lg:max-w-xs" header="Postingan Terbaru" posts={postsData?.data} tags={data?.tags} />
                    <div className="mt-7">
                        <h2 className="font-medium text-headingColor mb-4 md:text-xl">
                            Bagikan di:
                        </h2>
                        <SocialShareButtons url={encodeURI(
                            window.location.href
                        )} title={encodeURIComponent(
                            data?.title
                        )} />
                    </div>
                </div>
            </section>
        )}
        </>
    )
}

export default VidEduDetailPage