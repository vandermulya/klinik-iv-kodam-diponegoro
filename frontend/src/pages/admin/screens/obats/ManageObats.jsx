import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const fetchObats = async () => {
    const { data } = await axios.get('/api/obats');
    return data;
};

const deleteObat = async ({ slug, token }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const { data } = await axios.delete(`/api/obats/${slug}`, config);
    return data;
};

const ManageObats = () => {
    const queryClient = useQueryClient();
    const userState = useSelector((state) => state.user);
    const { data, error, isLoading, isError } = useQuery(['obats'], fetchObats);

    const mutation = useMutation(deleteObat, {
        onSuccess: () => {
            toast.success("Data obat berhasil dihapus!");
            queryClient.invalidateQueries(['obats']);
        },
    });

    const handleDelete = (slug) => {
        if (!userState || !userState.userInfo || !userState.userInfo.token) {
            console.error('User state or token is undefined');
            return;
        }

        mutation.mutate({
            slug,
            token: userState.userInfo.token,
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-5 tracking-wide'>DATA OBAT</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Nama</th>
                        <th className="py-2">Komposisi</th>
                        <th className="py-2">Dibuat Pada</th>
                        <th className="py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((obat) => (
                        <tr key={obat._id}>
                            <td className="border px-4 py-2">{obat.title}</td>
                            <td className="border px-4 py-2">{obat.komposisi}</td>
                            <td className="border px-4 py-2" align='center'>
                                {new Date(obat.createdAt).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </td>
                            <td className="border px-4 py-2" align='center'>
                                <button
                                    className="text-red-600 hover:text-red-900 mr-4 font-semibold"
                                    onClick={() => handleDelete(obat.slug)}
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/admin/obats/manage/edit/${obat.slug}`}
                                    className="text-green-600 hover:text-green-900 font-semibold"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageObats;
