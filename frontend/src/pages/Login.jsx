import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../store/reducers/userReducers";
import { login } from "../services/index/users";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password }) => {
            return login({ email, password });
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            localStorage.setItem("account", JSON.stringify(data));
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        if (userState.userInfo) {
            navigate("/");
        }
    }, [navigate, userState.userInfo]);

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    })

    const submitHandler = (data) => {
        const { email, password } = data;
        mutate({ email, password})
    };

    return (
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-sm mx-auto">
                <h1 className='text-2xl font-bold text-center text-headingColor mb-8'>
                    Masuk Akun
                </h1>
                <form onSubmit={handleSubmit(submitHandler)}>
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
                            Password
                        </label>
                        <input type="password" id='password' placeholder='Kata sandi Anda' className={`placeholder:text-[#959ead] text-headingColor mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"}`} 
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Kolom password wajib diisi!",
                            },
                            minLength: {
                                value: 6,
                                message: "Panjang password setidaknya harus 6 karakter!",
                            },
                        })} />
                        {errors.password?.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.password?.message}
                            </p>
                        )}
                    </div>

                    <Link to='/forget-password' className='text-base font-semibold text-primaryColor'>
                        Lupa kata sandi?
                    </Link>

                    <button type='submit' disabled={!isValid || isLoading} className='bg-primaryColor text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'>
                        Masuk
                    </button>

                    <p className='text-sm font-semibold text-[#5a7184]'>
                        Belum punya akun? <Link to='/register' className='text-primaryColor'>Daftar</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Login