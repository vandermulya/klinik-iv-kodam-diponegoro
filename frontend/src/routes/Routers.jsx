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
import ArticleDetailPage2 from '../pages/ArticlesDetail/ArticleDetailPage2'
import VidEduDetailPage2 from '../pages/VidEduDetail/VidEduDetailPage2'
import ObatDetailPage2 from '../pages/ObatDetail/ObatDetailPage2'
import ObatDetailPage3 from '../pages/ObatDetail/ObatDetailPage3'

const Routers = () => {
    return <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/artikel' element={<Artikel/>} />
        <Route path='/artikel/1' element={<ArticleDetailPage/>} />
        <Route path='/artikel/2' element={<ArticleDetailPage2/>} />
        <Route path='/video-edukasi' element={<VidEdukasi/>} />
        <Route path='/video-edukasi/1' element={<VidEduDetailPage/>} />
        <Route path='/video-edukasi/2' element={<VidEduDetailPage2/>} />
        <Route path='/data-obat' element={<DataObat/>} />
        <Route path='/data-obat/1' element={<ObatDetailPage/>} />
        <Route path='/data-obat/2' element={<ObatDetailPage2/>} />
        <Route path='/data-obat/3' element={<ObatDetailPage3/>} />
        {/* <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:id' element={<DoctorDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} /> */}
    </Routes>
}

export default Routers