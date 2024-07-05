import React, { useEffect, useState } from 'react'
import fotoTitleArtikel from './../../assets/images/artCard3.jpg'
import fotoTitleArtikel2 from './../../assets/images/artCard2.jpg'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/Comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialMedia/SocialShareButtons'
import { getAllPosts, getSinglePost } from '../../services/index/posts'
import { useQuery } from '@tanstack/react-query'
import { stables } from '../../constants'
import ArticleDetailSkeleton from './components/ArticleDetailSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import parseJsonToHtml from '../../utils/parseJsonToHtml';
import Editor from '../../components/editor/Editor';

const ArticleDetailPage = () => {
    const { slug } = useParams();
    const userState = useSelector((state) => state.user);
    const [breadCrumbsData, setbreadCrumbsData] = useState([]);
    const [body, setBody] = useState(null);

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getSinglePost({ slug }),
        // queryKey: ["blog", slug],
        queryKey: ["artikel", slug],
        onSuccess: (data) => {
            setbreadCrumbsData([
                { name: "Beranda", link: "/" },
                { name: "Artikel", link: "/artikel" },
                { name: "Detail Artikel", link: `/artikel/${data.slug}` },
            ]);
            setBody(parseJsonToHtml(data?.body));
        },
    });

    const { data: postsData } = useQuery({
        queryFn: () => getAllPosts(),
        queryKey: ["posts"],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        {isLoading ? (
            <ArticleDetailSkeleton />
        ) : isError ? (
            <ErrorMessage message={"Whoops.. Tidak dapat mengambil detail artikel :("}/>
        ) : (
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                    <BreadCrumbs data={breadCrumbsData} />
                    <img className='rounded-xl w-full' src={data?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                        : fotoTitleArtikel
                    } alt={data?.title} />

                    <div className="mt-4 flex gap-2">
                        {data?.categories.map((category) => (
                            <Link to={`/artikel?category=${category.name}`} className='text-textColor text-sm inline-block mt-4 md:text-base'>
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

                    <CommentsContainer comments={data?.comments} className="mt-10" logginedUserId={userState?.userInfo?._id} postSlug={slug} />
                </article>

                <div className="">
                    <SuggestedPosts className="mt-8 lg:mt-0 lg:max-w-xs" header="Artikel Terbaru" posts={postsData?.data} tags={data?.tags} />
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

export default ArticleDetailPage