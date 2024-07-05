import React, { useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import { createPortal } from "react-dom";
import { toast } from "react-hot-toast";

import { stables } from '../../constants'
import CropEasy from '../crop/CropEasy';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfilePicture } from '../../services/index/users';
import { userActions } from '../../store/reducers/userReducers';

const ProfilePicture = ({ avatar }) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    const [openCrop, setOpenCrop] = useState(false);
    const [photo, setPhoto] = useState(null);

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ token, formData }) => {
            return updateProfilePicture({
                token: token,
                formData: formData,
            });
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            setOpenCrop(false);
            localStorage.setItem("account", JSON.stringify(data));
            queryClient.invalidateQueries(["profile"]);
            toast.success("Foto profil berhasil dihapus!");
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPhoto({ url: URL.createObjectURL(file), file });
        setOpenCrop(true);
    };

    const handleDeleteImage = () => {
        if (window.confirm("Apakah Anda yakin ingin menghapus?")) {
            try {
                const formData = new FormData();
                formData.append("profilePicture", undefined);

                mutate({ token: userState.userInfo.token, formData: formData });
            } catch (error) {
                toast.error(error.message);
                console.log(error);
            }
        }
    };

    return (
        <>
        {openCrop &&
        createPortal(
            <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,
            document.getElementById("portal")
        )}

        <div className='w-full flex items-center gap-x-4'>
            <div className="relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primaryColor overflow-hidden">
                <label htmlFor="profilePicture" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
                    {avatar ? (
                        <img src={stables.UPLOAD_FOLDER_BASE_URL + avatar} alt="User Profile Picture" className='w-full h-full object-cover' />
                    ) : (
                        <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
                            <HiOutlineCamera className='w-7 h-auto text-primaryColor' />
                        </div>
                    )}
                </label>
                <input type="file" className='sr-only' id='profilePicture' onChange={handleFileChange} />
            </div>
            <button onClick={handleDeleteImage} type='button' className='border border-red-600 rounded-lg px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white font-semibold'>
                Hapus
            </button>
        </div>
        </>
    )
}

export default ProfilePicture