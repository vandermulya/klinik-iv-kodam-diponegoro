import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/user'

const navLinks = [
    {
        path: '/home',
        display: 'Beranda',
    },
    {
        path: '/telemedicine',
        display: 'Telemedicine',
    },
    {
        path: '/data-obat',
        display: 'Data Obat',
    },
    {
        path: '/artikel',
        display: 'Artikel',
    },
    {
        path: '/video-edukasi',
        display: 'Video Edukasi',
    },
]

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const [profileDrowpdown, setProfileDrowpdown] = useState(false);

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        handleStickyHeader()
        return() => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* ============ LOGO ============ */}
                    <div>
                        <img src={logo} alt="Logo Apotek" />
                    </div>

                    {/* ============ MENU ============ */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                    <li key={index} className={link.display === 'Telemedicine' ? 'italic-menu' : ''}>
                                        <NavLink to={link.path} 
                                        className={navClass => navClass.isActive 
                                        ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                                        }>
                                            {link.display}
                                        </NavLink>
                                    </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    
                    {/* ============ NAV RIGHT ============ */}
                    <div className="flex items-center gap-4">
                        <div className='hidden'>
                            <Link to='/'>
                                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                    <img src={userImg} className='w-full rounded-full' alt="User Profile Picture" />
                                </figure>
                            </Link>
                        </div>
                        
                        {/* ============ BUTTON LOGIN ============ */}
                        {userState.userInfo ? (
                            <div className="text-white items-center gap-y-5 lg:text-headingColor flex flex-col lg:flex-row gap-x-2 font-semibold">
                                <div className="relative group">
                                    <div className="flex flex-col items-center">
                                    <button
                                        className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 py-2 px-6 h-[44px] rounded-lg text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                                        onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                                    >
                                        <span>Akun</span>
                                        <MdKeyboardArrowDown />
                                    </button>
                                    <div
                                        className={`${profileDrowpdown ? "block" : "hidden"} 
                                        lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max relative z-20`}
                                    >
                                        <ul className="bg-primaryColor lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                                            {userState?.userInfo?.admin && (
                                                <button
                                                onClick={() => navigate("/admin")}
                                                type="button"
                                                className="hover:bg-headingColor hover:text-white px-4 py-2 text-white lg:text-textColor"
                                                >
                                                Admin Dashboard
                                                </button>
                                            )}

                                            <button
                                                onClick={() => navigate("/profile")}
                                                type="button"
                                                className="hover:bg-headingColor hover:text-white px-4 py-2 text-white lg:text-textColor"
                                            >
                                                Profil
                                            </button>
                                            <button
                                                onClick={logoutHandler}
                                                type="button"
                                                className="hover:bg-headingColor hover:text-white px-4 py-2 text-white lg:text-textColor"
                                            >
                                                Logout
                                            </button>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex'>
                                <button onClick={() => navigate("/login")} className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] md:mr-2 lg:mr-3 mr-3'>Login</button>
                                <span className='md:hidden' onClick={toggleMenu}>
                                    <BiMenu className='w-6 h-6 cursor-pointer mt-3' />
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header