import React from 'react'
import { Link } from 'react-router-dom'
import { stables } from '../../../constants'
import sampleImg from '../../../assets/images/artCard1.jpg'

const SuggestedPosts = ({ className, header, posts = [], tags}) => {
    return (
        <div className={` w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className} `}>
            <h2 className='font-[500] text-headingColor md:text-xl'>
                {header}
            </h2>

            <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
                {posts.map((item) => (
                    <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                        <img className='aspect-square object-cover rounded-lg w-1/5' 
                        src={item?.photo ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo : sampleImg} 
                        alt={item.title} />

                        <div className="text-sm text-headingColor font-medium">
                            <h3 className='text-sm text-headingColor font-medium md:text-base lg:text-lg'>
                                <Link to={`/video-edukasi/${item.slug}`}>
                                    {item.title}
                                </Link>
                            </h3>
                            <span className='text-xs opacity-60'>
                                {new Date(item.createdAt).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='font-medium text-headingColor mt-8 md:text-xl'>Tagar</h2>
            
            {tags.length === 0 ? (
                <p className='text-slate-500 text-sm mt-2'>Tidak ada tagar di postingan ini</p>
            ) : (
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
                    {tags.map((item, index) => (
                        <Link key={index} to="/" className='inline-block rounded-md px-3 py-1.5 bg-primaryColor text-xs text-white md:text-sm'>
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SuggestedPosts