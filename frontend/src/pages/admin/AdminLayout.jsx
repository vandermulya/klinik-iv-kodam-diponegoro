import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { getUserProfile } from '../../services/index/users';
import { useQuery } from '@tanstack/react-query';
import HeaderAdmin from './components/header/HeaderAdmin';

const AdminLayout = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);

    const { data: profileData, isLoading: profileIsLoading, error: profileError, } = useQuery({
        queryFn: () => {
            return getUserProfile({ token: userState.userInfo.token });
        },
        queryKey: ["profile"],
        onSuccess: (data) => {
            if (!data?.admin) {
                navigate("/");
                toast.error("Anda tidak diizinkan mengakses panel admin!");
            }
        },
        onError: (err) => {
            console.log(err);
            navigate("/");
            toast.error("Anda tidak diizinkan mengakses panel admin!");
        },
    });

    if (profileIsLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <h3 className="text-2xl text-slate-700">Loading...</h3>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen lg:flex-row">
            <HeaderAdmin />
            <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout