import React from 'react'
import avatarComment from './../../assets/images/avatar-icon.png'
import { FiMessageSquare, FiEdit2, FiTrash2 } from "react-icons/fi";
import CommentForm from './CommentForm';

const Comment = ({ 
    comment, 
    logginedUserId, 
    affectedComment, 
    setAffectedComment, 
    addComment, 
    parentId = null, 
    updateComment, 
    deleteComment, 
    replies, 
    }) => {
    const isUserLoggined = Boolean(logginedUserId);
    const commentBelongsToUser = logginedUserId === comment.user._id;
    const isReplying =
        affectedComment &&
        affectedComment.type === "replying" &&
        affectedComment._id === comment._id;
    const isEditing =
        affectedComment &&
        affectedComment.type === "editing" &&
        affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg'>
            <img className='w-9 h-9 object-cover rounded-full' src={avatarComment} alt="User Profile" />

            <div className="flex-1 flex flex-col">
                <h5 className="font-bold text-headingColor text-xs lg:text-sm">
                    {comment.user.name}
                </h5>
                <span className='text-xs text-textColor'>
                    {new Date(comment.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                    })}
                </span>
                {!isEditing && (
                    <p className="mt-[10px] text-textColor">
                        {comment.desc}
                    </p>
                )}
                {isEditing && (
                    <CommentForm
                        btnLabel="Update"
                        formSubmitHanlder={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText={comment.desc}
                    />
                )}
                <div className="flex items-center gap-x-3 text-textColor text-sm mt-3 mb-3">
                    {isUserLoggined && (
                        <button className='flex items-center space-x-2' onClick={() => setAffectedComment({ type: "replying", _id: comment._id })}>
                            <FiMessageSquare className='w-4 h-auto' />
                            <span>Balas</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                        <button className='flex items-center space-x-2' onClick={() => setAffectedComment({ type: "editing", _id: comment._id })}>
                            <FiEdit2 className='w-4 h-auto' />
                            <span>Edit</span>
                        </button>
                        <button className='flex items-center space-x-2' onClick={() => deleteComment(comment._id)}>
                            <FiTrash2 className='w-4 h-auto' />
                            <span>Hapus</span>
                        </button>
                        </>
                    )}
                </div>
                {isReplying && (
                <CommentForm
                    btnLabel="Balas"
                    formSubmitHanlder={(value) =>
                        addComment(value, repliedCommentId, replyOnUserId)
                    }
                    formCancelHandler={() => setAffectedComment(null)}
                />
                )}
                {replies.length > 0 && (
                    <div>
                        {replies.map((reply) => (
                            <Comment
                                key={reply._id}
                                addComment={addComment}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                comment={reply}
                                deleteComment={deleteComment}
                                logginedUserId={logginedUserId}
                                replies={[]}
                                updateComment={updateComment}
                                parentId={comment._id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment