import React from 'react'
import { Link } from 'react-router-dom'


const ObatCard = ({ dataobat }) => {
    const {nama, gambar, komposisi, guna, dosis, beri, kontra, spcinfo, efeksmpg, intrksi} = dataobat

    return (
        <div className="w-fit mb-8 lg:mb-[70px] mx-3 lg:mx-[30px] rounded overflow-hidden shadow-lg">
            <div className="w-fit lg:w-48 lg:h-48">
                <img className="w-40 h-40 lg:w-full lg:h-full object-cover" src={gambar} alt="Gambar Obat" />
            </div>
            <div className="px-4 py-2">
                <div className="font-bold text-center text-sm lg:text-lg mb-1">{nama}</div>
            </div>
            <div className="px-4 pt-2 pb-2 flex items-center justify-center">
                <button className="bg-primaryColor rounded-lg px-4 py-2 text-sm font-semibold text-white mr-2 mb-2">Info Detail</button>
            </div>
        </div>
    )
}

export default ObatCard