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
import DataObatCoba from '../pages/DataObatCoba'
import Profile from '../pages/Profile'
import AdminLayout from '../pages/admin/AdminLayout'
import Admin from '../pages/admin/screens/Admin'
import Comments from '../pages/admin/screens/comments/Comments'
import ManagePosts from '../pages/admin/screens/posts/ManagePosts'
import EditPost from '../pages/admin/screens/posts/EditPost'
import Categories from '../pages/admin/screens/categories/Categories'
import EditCategories from '../pages/admin/screens/categories/EditCategories'
import Users from '../pages/admin/screens/users/Users'
import ArtikelPage from '../pages/ArtikelPage'
import VidEduPage from '../pages/VidEduPage'
import ManageVideos from '../pages/admin/screens/videos/ManageVideos'
import EditVideo from '../pages/admin/screens/videos/EditVideo'
import ManageObats from '../pages/admin/screens/obats/ManageObats'
import EditObat from '../pages/admin/screens/obats/EditObat'

const Routers = () => {
    return <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/artikel' element={<Artikel/>} />
        <Route path='/artikel-page' element={<ArtikelPage />} />
        <Route path='/artikel/:slug' element={<ArticleDetailPage/>} />
        <Route path='/video-edukasi' element={<VidEdukasi/>} />
        <Route path='/video-edukasi-page' element={<VidEduPage/>} />
        <Route path='/video-edukasi/:slug' element={<VidEduDetailPage/>} />
        {/* <Route path='/data-obat' element={<DataObat/>} /> */}
        <Route path='/data-obat' element={<DataObatCoba/>} />

        <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Admin />} />
            <Route path='comments' element={<Comments />} />
            <Route path='users/manage' element={<Users />} />
            <Route path='categories/manage' element={<Categories />} />
            <Route path='categories/manage/edit/:slug' element={<EditCategories />} />
            <Route path='posts/manage' element={<ManagePosts />} />
            <Route path='posts/manage/edit/:slug' element={<EditPost />} />
            <Route path='videos/manage' element={<ManageVideos />} />
            <Route path='videos/manage/edit/:slug' element={<EditVideo />} />
            <Route path='obats/manage' element={<ManageObats />} />
            <Route path='obats/manage/edit/:slug' element={<EditObat />} />
        </Route>
    </Routes>
}

export default Routers