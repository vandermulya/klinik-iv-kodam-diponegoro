import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import FooterCoba from '../components/Footer/FooterCoba'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
            {/* <Footer /> */}
            <FooterCoba />
        </>
    )
}

export default Layout