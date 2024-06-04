import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

import {Routes, Route} from 'react-router-dom'
import Artikel from '../pages/Artikel'
import ArticleDetailPage from '../pages/ArticlesDetail/ArticleDetailPage'
import VidEdukasi from '../pages/VidEdukasi'
import VidEduDetailPage from '../pages/VidEduDetail/VidEduDetailPage'
import DataObat from '../pages/DataObat'
import ObatDetailPage from '../pages/ObatDetail/ObatDetailPage'

const Routers = () => {
    return <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/artikel' element={<Artikel/>} />
        <Route path='/artikel/:id' element={<ArticleDetailPage/>} />
        <Route path='/video-edukasi' element={<VidEdukasi/>} />
        <Route path='/video-edukasi/:id' element={<VidEduDetailPage/>} />
        <Route path='/data-obat' element={<DataObat/>} />
        <Route path='/data-obat/:id' element={<ObatDetailPage/>} />
        {/* <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:id' element={<DoctorDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} /> */}
    </Routes>
}

export default Routers