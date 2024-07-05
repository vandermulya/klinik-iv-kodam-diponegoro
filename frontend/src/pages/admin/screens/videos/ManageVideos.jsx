import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { stables } from '../../../../constants';
import sampleImg from '../../../../assets/images/artCard1.jpg'
import Pagination from '../../../../components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { useDataTable } from '../../../../hooks/useDataTable';
import DataTable from '../../components/DataTable';
import { deleteVideo, getAllVideos } from '../../../../services/index/videos';

const ManageVideos = () => {
    const {
        userState,
        currentPage,
        searchKeyword,
        data: postsData,
        isLoading,
        isFetching,
        isLoadingDeleteData,
        queryClient,
        searchKeywordHandler,
        submitSearchKeywordHandler,
        deleteDataHandler,
        setCurrentPage,
    } = useDataTable({
        dataQueryFn: () => getAllVideos(searchKeyword, currentPage),
        dataQueryKey: "videos",
        deleteDataMessage: "Video terhapus!",
        mutateDeleteFn: ({ slug, token }) => {
        return deleteVideo({
            slug,
            token,
        });
        },
    });

    return (
        <DataTable
        pageTitle="Kelola Video"
        dataListName="Postingan Video"
        searchInputPlaceHolder="Judul Video"
        searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
        searchKeywordOnChangeHandler={searchKeywordHandler}
        searchKeyword={searchKeyword}
        tableHeaderTitleList={["Judul", "Kategori", "Dibuat Pada", "Tagar", ""]}
        isLoading={isLoading}
        isFetching={isFetching}
        data={postsData?.data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        headers={postsData?.headers}
        userState={userState}
        >
        {postsData?.data.map((post) => (
            <tr>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <a href="/" className="relative block">
                    <img
                        src={
                        post?.photo
                            ? stables.UPLOAD_FOLDER_BASE_URL + post?.photo
                            : sampleImg
                        }
                        alt={post.title}
                        className="mx-auto object-cover rounded-lg w-10 aspect-square"
                    />
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{post.title}</p>
                </div>
                </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                {post.categories.length > 0
                    ? post.categories
                        .slice(0, 3)
                        .map(
                        (category, index) =>
                            `${category.title}${
                            post.categories.slice(0, 3).length === index + 1
                                ? ""
                                : ", "
                            }`
                        )
                    : "Uncategorized"}
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                {new Date(post.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex gap-x-2">
                {post.tags.length > 0
                    ? post.tags.map((tag, index) => (
                        <p>
                        {tag}
                        {post.tags.length - 1 !== index && ","}
                        </p>
                    ))
                    : "No tags"}
                </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                <button
                disabled={isLoadingDeleteData}
                type="button"
                className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={() => {
                    deleteDataHandler({
                    slug: post?.slug,
                    token: userState.userInfo.token,
                    });
                }}
                >
                Delete
                </button>
                <Link
                to={`/admin/videos/manage/edit/${post?.slug}`}
                className="text-green-600 hover:text-green-900"
                >
                Edit
                </Link>
            </td>
            </tr>
        ))}
        </DataTable>
    )
}

export default ManageVideos