import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const {register, handleSubmit, formState: {errors, isValid}, watch} = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onChange",
    })

    const submitHandler = (data) => {
        console.log(data);
    };

    const password = watch('password');

    return (
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-sm mx-auto">
                <h1 className='text-2xl font-bold text-center text-headingColor mb-8'>
                    Daftar Akun
                </h1>
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

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="confirmPassword" className='text-[#5a7184] font-semibold block'>
                            Konfirmasi Password
                        </label>
                        <input type="password" id='confirmPassword' placeholder='Konfirmasi kata sandi Anda' className={`placeholder:text-[#959ead] text-headingColor mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"}`} 
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Kolom konfirmasi password wajib diisi!",
                            },
                            validate: (value) => {
                                if (value !== password) {
                                return "Kata sandi tidak cocok!";
                                }
                            },
                        })} />
                        {errors.confirmPassword?.message && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.confirmPassword?.message}
                            </p>
                        )}
                    </div>
                    
                    <Link to='/forget-password' className='text-base font-semibold text-primaryColor'>
                        Lupa kata sandi?
                    </Link>

                    <button type='submit' disabled={!isValid} className='bg-primaryColor text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'>
                        Daftar
                    </button>

                    <p className='text-sm font-semibold text-[#5a7184]'>
                        Sudah punya akun? <Link to='/login' className='text-primaryColor'>Masuk</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Signup