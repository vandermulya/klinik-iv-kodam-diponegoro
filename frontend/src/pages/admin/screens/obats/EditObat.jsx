import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { useSelector } from 'react-redux';
import { getObat, updateObat } from '../../../../services/index/obats';
import VidEduDetailSkeleton from '../../../VidEduDetail/components/VidEduDetailSkeleton';
import ErrorMessage from '../../../../components/ErrorMessage';

const EditObat = () => {
    const { slug } = useParams(); // Mengambil slug dari URL
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);
    const [title, setTitle] = useState("");
    const [indikasi, setIndikasi] = useState("");
    const [komposisi, setKomposisi] = useState("");
    const [dosis, setDosis] = useState("");
    const [aturanpakai, setAturanPakai] = useState("");
    const [efeksamping, setEfekSamping] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getObat({ slug }),
        queryKey: ["dataobat", slug],
        onSuccess: (data) => {
            setTitle(data.title);
            setIndikasi(data.indikasi);
            setKomposisi(data.komposisi);
            setDosis(data.dosis);
            setAturanPakai(data.aturanpakai);
            setEfekSamping(data.efeksamping);
        },
        refetchOnWindowFocus: false,
    });

    const { mutate: mutateUpdateDataObat, isLoading: isLoadingUpdateDataObat } = useMutation({
        mutationFn: ({ updatedData, slug, token }) => {
            // console.log("Mutating with:", updatedData, slug, token); // Debug log
            return updateObat({ updatedData, slug, token });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(["dataobat", slug]);
            toast.success("Data obat berhasil diperbarui!");
            navigate(`/admin/obats/manage`, { replace: true }); // Arahkan ke halaman kelola obat setelah update berhasil
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const handleUpdateObat = async (e) => {
        e.preventDefault();
        let updatedData = {
            title,
            indikasi,
            komposisi,
            dosis,
            aturanpakai,
            efeksamping
        };

        // console.log("Updating data:", updatedData); // Debug log

        mutateUpdateDataObat({
            updatedData,
            slug,
            token: userState.userInfo.token,
        });
    };

    return (
        <>
            {isLoading ? (
                <VidEduDetailSkeleton />
            ) : isError ? (
                <ErrorMessage message={"Whoops.. Tidak dapat mengambil detail data obat :("} />
            ) : (
                <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                    <article className='flex-1'>
                        <form onSubmit={handleUpdateObat}>
                            <div className="d-form-control w-full">
                                <label htmlFor="title" className='d-label'>
                                    <span className='d-label-text'>Nama Obat</span>
                                </label>
                                <input id='title' value={title} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Nama Obat' />
                            </div>

                            <div className="d-form-control w-full">
                                <label htmlFor="indikasi" className='d-label'>
                                    <span className='d-label-text'>Indikasi</span>
                                </label>
                                <input id='indikasi' value={indikasi} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setIndikasi(e.target.value)}
                                    placeholder='Indikasi Obat' />
                            </div>

                            <div className="d-form-control w-full">
                                <label htmlFor="komposisi" className='d-label'>
                                    <span className='d-label-text'>Komposisi</span>
                                </label>
                                <input id='komposisi' value={komposisi} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setKomposisi(e.target.value)}
                                    placeholder='Komposisi Obat' />
                            </div>

                            <div className="d-form-control w-full">
                                <label htmlFor="dosis" className='d-label'>
                                    <span className='d-label-text'>Dosis</span>
                                </label>
                                <input id='dosis' value={dosis} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setDosis(e.target.value)}
                                    placeholder='Dosis Obat' />
                            </div>

                            <div className="d-form-control w-full">
                                <label htmlFor="aturanpakai" className='d-label'>
                                    <span className='d-label-text'>Aturan Pakai</span>
                                </label>
                                <input id='aturanpakai' value={aturanpakai} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setAturanPakai(e.target.value)}
                                    placeholder='Aturan Pakai' />
                            </div>

                            <div className="d-form-control w-full">
                                <label htmlFor="efeksamping" className='d-label'>
                                    <span className='d-label-text'>Efek Samping</span>
                                </label>
                                <input id='efeksamping' value={efeksamping} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]'
                                    onChange={(e) => setEfekSamping(e.target.value)}
                                    placeholder='Efek Samping Pemakaian' />
                            </div>

                            <br /><br />
                            <button
                                type='submit'
                                disabled={isLoadingUpdateDataObat}
                                className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70">
                                Update
                            </button>
                        </form>
                    </article>
                </section>
            )}
        </>
    );
}

export default EditObat;
