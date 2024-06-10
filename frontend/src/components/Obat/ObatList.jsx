import React from 'react'

import { dataobats } from './../../assets/data/dataobat'
import ObatCard from './ObatCard'

const ObatList = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 lg:gap-[0px] mt-[30px] lg:mt-[55px]'>
            {dataobats.map(dataobat => (
                <ObatCard key={dataobat.id} dataobat={dataobat} />
            ))}
        </div>
    )
}

export default ObatList