import React from 'react'
import { Link } from 'react-router-dom'


const ObatCard = ({ dataobat }) => {
    const {nama, gambar, komposisi, guna, dosis, beri, kontra, spcinfo, efeksmpg, intrksi, link_url} = dataobat

    return (
        // <div className="w-fit mb-8 lg:mb-[70px] mx-3 lg:mx-[30px] rounded overflow-hidden shadow-lg">
        //     <div className="w-fit lg:w-48 lg:h-48">
        //         <img className="w-40 h-40 lg:w-full lg:h-full object-cover" src={gambar} alt="Gambar Obat" />
        //     </div>
        //     <div className="px-4 py-2">
        //         <div className="font-bold text-center text-sm lg:text-lg mb-1">{nama}</div>
        //     </div>
        //     <div className="px-4 pt-2 pb-2 flex items-center justify-center">
        //         <button className="bg-primaryColor rounded-lg px-4 py-2 text-sm font-semibold text-white mr-2 mb-2">Info Detail</button>
        //     </div>
        // </div>


        <div className="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={link_url}>
                <img className="rounded-t-lg w-full h-auto" src={gambar} alt="Gambar Obat" />
            </a>
            <div className="p-5">
                <a href={link_url}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nama}</h5>
                </a>
                <a href={link_url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Info Detail
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default ObatCard