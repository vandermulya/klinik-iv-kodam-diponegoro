import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import Search from "../components/Search/Search";
import ErrorMessage from "../components/ErrorMessage";
import ArticleCard from "../components/Article/ArticleCard";
import Pagination from "../components/Pagination/Pagination";
import ArticleCardSkeleton from "../components/Article/ArticleCardSkeleton";
import { getAllPosts } from "../services/index/posts";

let isFirstRun = true;

const ArtikelPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsValue = Object.fromEntries([...searchParams]);
    const currentPage = parseInt(searchParamsValue?.page) || 1;
    const searchKeyword = searchParamsValue?.search || "";

    const { data, isLoading, isError, isFetching, refetch } = useQuery({
        queryFn: () => getAllPosts(searchKeyword, currentPage, 6),
        queryKey: ["posts"],
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    // console.log(data);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isFirstRun) {
            isFirstRun = false;
            return;
        }
        refetch();
    }, [currentPage, searchKeyword, refetch]);

    const handlePageChange = (page) => {
        // change the page's query string in the URL
        setSearchParams({ page, search: searchKeyword });
    };

    const handleSearch = ({ searchKeyword }) => {
        setSearchParams({ page: 1, search: searchKeyword });
    };

    return (
        <section className="flex flex-col container mx-auto px-5 py-10">
            <Search
            className="w-full max-w-xl mb-10"
            onSearchKeyword={handleSearch}
            />
            <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
            {isLoading || isFetching ? (
                [...Array(3)].map((item, index) => (
                <ArticleCardSkeleton
                    key={index}
                    className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                />
                ))
            ) : isError ? (
                <ErrorMessage message="Tidak dapat mengambil data artikel!" />
            ) : data?.data.length === 0 ? (
                <p className="text-red-600 font-semibold text-xl">Artikel tidak ditemukan!</p>
            ) : (
                data?.data.map((post) => (
                <ArticleCard
                    key={post._id}
                    post={post}
                    className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                />
                ))
            )}
            </div>
            {!isLoading && (
            <Pagination
                onPageChange={(page) => handlePageChange(page)}
                currentPage={currentPage}
                totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
            />
            )}
        </section>
    )
}

export default ArtikelPage