import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa6";

const SocialShareButtons = ({ url, title }) => {
    return (
        <div className="w-full flex justify-start gap-6">
            <a target='_blank' rel='noreferrer' href={`https://www.facebook.com/share.php?u=${url}`}>
                <FaFacebook className='text-headingColor w-5 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://twitter.com/intent/tweet?url=${url}`}>
                <FaXTwitter className='text-headingColor w-5 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://api.whatsapp.com/send/?text=${url}`}>
                <FaWhatsapp className='text-headingColor w-5 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                <FaLinkedin className='text-headingColor w-5 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://telegram.me/share/url?url=${url}`}>
                <FaTelegram className='text-headingColor w-5 h-auto' />
            </a>
        </div>
    )
}

export default SocialShareButtons