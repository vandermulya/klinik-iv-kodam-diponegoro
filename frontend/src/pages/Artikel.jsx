import React, { useEffect } from 'react'
import headArtImg from '../assets/images/art-header-2.png'
import { RiSearchLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import ArticleCard from '../components/Article/ArticleCard';
import ArticleCTA from '../components/Article/ArticleCTA';

import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from '../services/index/posts';
import ArticleCardSkeleton from '../components/Article/ArticleCardSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import Search from '../components/Search/Search';

let isFirstRun = true;

const Artikel = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsValue = Object.fromEntries([...searchParams]);
    const currentPage = parseInt(searchParamsValue?.page) || 1;
    const searchKeyword = searchParamsValue?.search || "";

    const { data, isLoading, isError, isFetching, refetch } = useQuery({
        queryFn: () => getAllPosts(searchKeyword, currentPage, 3),
        queryKey: ["posts"],
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isFirstRun) {
            isFirstRun = false;
            return;
        }
        refetch();
    }, [currentPage, searchKeyword, refetch]);

    const handleSearch = ({ searchKeyword }) => {
        setSearchParams({ page: 1, search: searchKeyword });
    };

    return (
        <>
        {/* SECTION HEADER KOMPONEN PAGE ARTIKEL */}
        <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
            <div className="mt-10 lg:w-1/2">
                <h1 className='text-3xl text-center font-[700] text-headingColor md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Perbanyak literasi medis melalui artikel kami.</h1>
                <p className='text-textColor mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                    Kami menyediakan berbagai artikel menarik seputar kesehatan, gaya hidup, perawatan diri, dan lainnya yang dapat menambah literatur wawasan Anda.
                </p>
                {/* <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
                    <div className="relative">
                        <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead]'/>
                        <input className='placeholder:font-bold placeholder:tracking-[1px] font-semibold text-textColor placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' placeholder='Cari artikel' type="text" />
                    </div>
                    <button className='w-full bg-primaryColor text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
                        Cari
                    </button>
                </div> */}
                <Search className="mt-10 lg:mt-6 xl:mt-10" onSearchKeyword={handleSearch} />
                <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                    <span className='text-textColor font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>
                        Topik Populer:
                    </span>
                    <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Gizi</li>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Mental</li>
                        <li className='rounded-lg bg-irisBlueColor bg-opacity-10 px-3 py-1.5 font-semibold text-[#01B5C5]'>Olahraga</li>
                    </ul>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img className='w-full' src={headArtImg} alt="Picture Header Artikel" />
            </div>
        </section>

        {/* SECTION CARD KOMPONEN PAGE ARTIKEL */}
        <section className='flex flex-col container mx-auto px-5 py-10'>
            <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                {isLoading ? (
                    [...Array(3)].map((item, index) => (
                        <ArticleCardSkeleton key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
                    ))
                ) : isError ? (
                    <ErrorMessage message={"Whoops.. Tidak dapat mengambil data artikel :("} />
                ) :  data?.data.map((post) => (
                    <ArticleCard 
                    key={post._id} 
                    post={post}
                    className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
                ))}
            </div>
            <Link to='/artikel-page' className='mx-auto flex items-center gap-x-2 font-bold text-[#0067FF] border-2 border-[#0067FF] px-6 py-3 rounded-lg'>
                <span>Lebih banyak</span>
                <HiArrowRight className='w-3 h-3' />
            </Link>
            {/* TESTING ONLY */}
        </section>

        {/* <ArticleCTA /> */}
        </>
    )
}

export default Artikel