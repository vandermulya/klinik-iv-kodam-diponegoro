import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../services/index/users";
import ProfilePicture from "../components/Profile/ProfilePicture";
import { userActions } from "../store/reducers/userReducers";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const userState = useSelector((state) => state.user);

    const { data: profileData, isLoading: profileIsLoading } = useQuery({
        queryFn: () => {
            return getUserProfile({ token: userState.userInfo.token });
        },
        queryKey: ["profile"],
    });

    const { mutate, isLoading: updateProfileIsLoading } = useMutation({
        mutationFn: ({ name, email, password }) => {
            return updateProfile({
                token: userState.userInfo.token,
                userData: { name, email, password },
                userId: userState.userInfo._id,
            });
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            localStorage.setItem("account", JSON.stringify(data));
            queryClient.invalidateQueries(["profile"]);
            toast.success("Profil Anda berhasil diperbarui!");
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        if (!userState.userInfo) {
            navigate("/");
        }
    }, [navigate, userState.userInfo]);

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        values: useMemo(() => {
            return {
                name: profileIsLoading ? "" : profileData.name,
                email: profileIsLoading ? "" : profileData.email,
            };
        }, [profileData?.email, profileData?.name, profileIsLoading]),
        mode: "onChange",
    });

    const submitHandler = (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password });
    };

    return (
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-sm mx-auto">
                <ProfilePicture avatar={profileData?.avatar} />
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="name" className='text-[#5a7184] font-semibold block'>
                            Nama
                        </label>
                        <input type="text" id='name' placeholder='Nama Anda' className={`placeholder:text-[#959ead] text-headingColor mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`} {...register("name", {
                            minLength: {
                                value: 1,
                                message: "Panjang nama setidaknya harus 1 karakter",
                            }, 
                            required: {
                                value: true,
                                message: "Kolom nama wajib diisi!",
                            },
                        })} />
                        {errors.name?.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.name?.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="email" className='text-[#5a7184] font-semibold block'>
                            Email
                        </label>
                        <input type="email" id='email' placeholder='Email Anda' className={`placeholder:text-[#959ead] text-headingColor mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`} 
                        {...register("email", {
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Masukkan alamat email yang valid!",
                            },
                            required: {
                                value: true,
                                message: "Kolom email wajib diisi!",
                            },
                        })} />
                        {errors.email?.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.email?.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="password" className='text-[#5a7184] font-semibold block'>
                            Password Baru
                        </label>
                        <input type="password" id='password' placeholder='Masukkan kata sandi baru' className={`placeholder:text-[#959ead] text-headingColor mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"}`} 
                        {...register("password")} />
                        {errors.password?.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.password?.message}
                            </p>
                        )}
                    </div>

                    <button type='submit' disabled={!isValid || profileIsLoading || updateProfileIsLoading} className='bg-primaryColor text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'>
                        Update
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Profile