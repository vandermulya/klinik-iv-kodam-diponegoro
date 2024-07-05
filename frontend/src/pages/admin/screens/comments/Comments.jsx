import React from 'react'
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { deleteComment, getAllComments, updateComment } from '../../../../services/index/comments';
import { useDataTable } from '../../../../hooks/useDataTable';
import { stables } from '../../../../constants';
import DataTable from '../../components/DataTable';
import userImg from '../../../../assets/images/sample-user.png'

const Comments = () => {
    const {
        userState,
        currentPage,
        searchKeyword,
        data: commentsData,
        isLoading,
        isFetching,
        isLoadingDeleteData,
        queryClient,
        searchKeywordHandler,
        submitSearchKeywordHandler,
        deleteDataHandler,
        setCurrentPage,
    } = useDataTable({
        dataQueryFn: () =>
        getAllComments(userState.userInfo.token, searchKeyword, currentPage),
        dataQueryKey: "comments",
        deleteDataMessage: "Komentar terhapus!",
        mutateDeleteFn: ({ slug, token }) => {
        return deleteComment({
            commentId: slug,
            token,
        });
        },
    });

    const { mutate: mutateUpdateCommentCheck, isLoading: isLoadingUpdateCommentCheck } = useMutation({
        mutationFn: ({ token, check, commentId }) => {
            return updateComment({ token, check, commentId });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(["comments"]);
            toast.success(
                data?.check ? "Komentar disetujui" : "Komentar tidak disetujui"
            );
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    return (
        <DataTable
            pageTitle="Kelola Komentar"
            dataListName="Komentar Postingan"
            searchInputPlaceHolder="Cari komentar"
            searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
            searchKeywordOnChangeHandler={searchKeywordHandler}
            searchKeyword={searchKeyword}
            tableHeaderTitleList={[
                "Penulis",
                "Komentar",
                "Menanggapi",
                "Dibuat Pada",
                "",
            ]}
            isFetching={isFetching}
            isLoading={isLoading}
            data={commentsData?.data}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            headers={commentsData?.headers}
        >
        {commentsData?.data.map((comment) => (
            <tr>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <a href="/" className="relative block">
                    <img
                        src={
                        comment?.user?.avatar
                            ? stables.UPLOAD_FOLDER_BASE_URL + comment?.user?.avatar
                            : userImg
                        }
                        alt={comment?.user?.name}
                        className="mx-auto object-cover rounded-lg w-10 aspect-square"
                    />
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {comment?.user?.name}
                    </p>
                </div>
                </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {comment?.replyOnUser !== null && (
                <p className="text-gray-900 whitespace-no-wrap">
                    Menanggapi{" "}
                    <Link
                    to={`/artikel/${comment?.post?.slug}/#comment-${comment?._id}`}
                    className="text-blue-500"
                    >
                    {comment?.replyOnUser?.name}
                    </Link>
                </p>
                )}
                <p className="text-gray-900 whitespace-no-wrap">{comment?.desc}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                <Link
                    to={`/artikel/${comment?.post?.slug}`}
                    className="text-blue-500"
                >
                    {comment?.post?.title}
                </Link>
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                {new Date(comment.createdAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                })}
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                <button
                disabled={isLoadingDeleteData}
                type="button"
                className={`${
                    comment?.check
                    ? "text-yellow-600 hover:text-yellow-900"
                    : "text-green-600 hover:text-green-900"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
                onClick={() => {
                    mutateUpdateCommentCheck({
                    token: userState.userInfo.token,
                    check: comment?.check ? false : true,
                    commentId: comment._id,
                    });
                }}
                >
                {comment?.check ? "Tolak" : "Terima"}
                </button>
                <button
                disabled={isLoadingDeleteData}
                type="button"
                className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={() => {
                    deleteDataHandler({
                    slug: comment?._id,
                    token: userState.userInfo.token,
                    });
                }}
                >
                Hapus
                </button>
            </td>
            </tr>
        ))}
        </DataTable>
    )
}

export default Comments