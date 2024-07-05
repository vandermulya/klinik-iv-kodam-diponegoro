import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useWindowSize } from "@uidotdev/usehooks";
import { toast } from "react-hot-toast";

import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import { FaComments } from "react-icons/fa";
import { MdDashboard, MdVideoLibrary, MdCategory } from "react-icons/md";
import logoKlinik from '../../../../assets/images/logo.png'
import NavItem from './NavItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import NavItemCollapse from './NavItemCollapse';
import { useSelector } from 'react-redux';
import { createPost } from '../../../../services/index/posts';
import { createVideo } from '../../../../services/index/videos';

const HeaderAdmin = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);
    const queryClient = useQueryClient();
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeNavName, setActiveNavName] = useState("dashboard");
    const windowSize = useWindowSize();

    const { mutate: mutateCreatePost, isLoading: isLoadingCreatePost } =
        useMutation({
        mutationFn: ({ slug, token }) => {
            return createPost({
            token,
            });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(["posts"]);
            toast.success("Artikel sudah terbuat, edit sekarang!");
            navigate(`/admin/posts/manage/edit/${data.slug}`);
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const { mutate: mutateCreateVideo, isLoading: isLoadingCreateVideo } =
        useMutation({
        mutationFn: ({ slug, token }) => {
            return createVideo({
            token,
            });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(["videos"]);
            toast.success("Video sudah terbuat, edit sekarang!");
            navigate(`/admin/videos/manage/edit/${data.slug}`);
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const toggleMenuHandler = () => {
        setIsMenuActive((prevState) => !prevState);
    };

    useEffect(() => {
        if (windowSize.width < 1024) {
            setIsMenuActive(false);
        } else {
            setIsMenuActive(true);
        }
    }, [windowSize.width]);

    const handleCreateNewPost = ({ token }) => {
        mutateCreatePost({ token });
    };

    const handleCreateNewVideo = ({ token }) => {
        mutateCreateVideo({ token });
    };

    
    return (
        <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0">
            <Link to="/">
                <img src={logoKlinik} alt="Logo Klinik" className='w-28 lg:hidden' />
            </Link>

            <div className="cursor-pointer lg:hidden">
                {isMenuActive ? (
                <AiOutlineClose className="w-6 h-6" onClick={toggleMenuHandler} />
                ) : (
                <AiOutlineMenu className="w-6 h-6" onClick={toggleMenuHandler} />
                )}
            </div>

            {/* SIDEBAR CONTAINER */}
            {isMenuActive && (
                <div className="fixed inset-0 lg:static lg:h-full lg:w-full">
                
                {/* underlay */}
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden"
                    onClick={toggleMenuHandler}
                />
                
                {/* sidebar */}
                <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4 lg:static lg:h-full lg:w-full lg:p-6">
                    <Link to="/">
                        <img src={logoKlinik} alt="Logo Klinik" className="w-28" />
                    </Link>
                    <h4 className="mt-10 font-bold text-[#C7C7C7]">MENU UTAMA</h4>

                    {/* menu items */}
                    <div className="mt-6 flex flex-col gap-y-[0.563rem]">
                    <NavItem
                        title="Dashboard"
                        link="/admin"
                        icon={<AiFillDashboard className="text-xl" />}
                        name="dashboard"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    />

                    <NavItem
                        title="Komentar"
                        link="/admin/comments"
                        icon={<FaComments className="text-xl" />}
                        name="comments"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    />

                    <NavItem
                        title="Kategori"
                        link="/admin/categories/manage"
                        icon={<MdCategory className="text-xl" />}
                        name="categories"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    />

                    <NavItemCollapse
                        title="Artikel"
                        icon={<MdDashboard className="text-xl" />}
                        name="posts"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    >
                        <Link to="/admin/posts/manage">Kelola Artikel</Link>
                        <button
                        className="text-start disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={isLoadingCreatePost}
                        onClick={() =>
                            handleCreateNewPost({ token: userState.userInfo.token })
                        }
                        >
                        Buat Artikel Baru
                        </button>
                    </NavItemCollapse>

                    <NavItemCollapse
                        title="Video"
                        icon={<MdVideoLibrary className="text-xl" />}
                        name="videos"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    >
                        <Link to="/admin/videos/manage">Kelola Video</Link>
                        <button
                        className="text-start disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={isLoadingCreateVideo}
                        onClick={() =>
                            handleCreateNewVideo({ token: userState.userInfo.token })
                        }
                        >
                        Buat Video Baru
                        </button>
                    </NavItemCollapse>

                    <NavItem
                        title="Users"
                        link="/admin/users/manage"
                        icon={<FaUser className="text-xl" />}
                        name="users"
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                    />
                    </div>
                </div>
                </div>
            )}
        </header>
    )
}

export default HeaderAdmin