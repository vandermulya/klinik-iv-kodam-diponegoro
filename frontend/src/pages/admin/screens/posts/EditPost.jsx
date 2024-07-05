import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { getSinglePost, updatePost } from '../../../../services/index/posts';
import ArticleDetailSkeleton from '../../../ArticlesDetail/components/ArticleDetailSkeleton';
import ErrorMessage from '../../../../components/ErrorMessage';
import { stables } from '../../../../constants';
import Editor from '../../../../components/editor/Editor';
import { useSelector } from 'react-redux';
import MultiSelectTagDropdown from '../../components/select-dropdown/MultiSelectTagDropdown';
import { getAllCategories } from '../../../../services/index/postCategories';
import { categoryToOption, filterCategories } from '../../../../utils/multiSelectTagUtils';

const promiseOptions = async (inputValue) => {
  const { data: categoriesData } = await getAllCategories();
  return filterCategories(inputValue, categoriesData);
};

const EditPost = () => {
    const { slug } = useParams()
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);
    const [initialPhoto, setInitialPhoto] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [body, setBody] = useState(null);
    const [categories, setCategories] = useState(null);
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState(null);
    const [postSlug, setPostSlug] = useState(slug);
    const [caption, setCaption] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getSinglePost({ slug }),
        queryKey: ["artikel", slug],
        onSuccess: (data) => {
            setInitialPhoto(data?.photo);
            setCategories(data.categories.map((item) => item._id));
            setTitle(data.title);
            setTags(data.tags);
        },
        refetchOnWindowFocus: false,
    });

    const { mutate: mutateUpdatePostDetail, isLoading: isLoadingUpdatePostDetail, } = useMutation({
      mutationFn: ({ updatedData, slug, token }) => {
        return updatePost({
          updatedData,
          slug,
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["artikel", slug]);
        toast.success("Artikel berhasil diupdate!");
        navigate(`/admin/posts/manage/edit/${data.slug}`, { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setPhoto(file);
    };

    const handleUpdatePost = async () => {
      let updatedData = new FormData();

      if (!initialPhoto && photo) {
        updatedData.append("postPicture", photo);
      } else if (initialPhoto && !photo) {
        const urlToObject = async (url) => {
          let reponse = await fetch(url);
          let blob = await reponse.blob();
          const file = new File([blob], initialPhoto, { type: blob.type });
          return file;
        };
        const picture = await urlToObject(
          stables.UPLOAD_FOLDER_BASE_URL + data?.photo
        );

        updatedData.append("postPicture", picture);
      }

      updatedData.append(
        "document",
        JSON.stringify({ body, categories, title, tags, slug: postSlug, caption })
      );

      mutateUpdatePostDetail({
        updatedData,
        slug,
        token: userState.userInfo.token,
      });
    };

    const handleDeleteImage = () => {
      if (window.confirm("Apakah Anda yakin ingin menghapus gambar artikel?")) {
        setInitialPhoto(null);
        setPhoto(null);
      }
    };

    let isPostDataLoaded = !isLoading && !isError;

    return (
      <>
      {isLoading ? (
            <ArticleDetailSkeleton />
        ) : isError ? (
            <ErrorMessage message={"Whoops.. Tidak dapat mengambil detail artikel :("}/>
        ) : (
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                  <label htmlFor="postPicture" className='w-full cursor-pointer'>
                    {photo ? (
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={data?.title}
                        className="rounded-xl w-[70%] h-auto"
                      />
                    ) : initialPhoto ? (
                      <img
                        src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                        alt={data?.title}
                        className="rounded-xl w-[70%] h-auto"
                      />
                    ) : (
                      <div className="w-full min-h-[200px] bg-blue-50/50 flex justify-center items-center">
                        <HiOutlineCamera className="w-7 h-auto text-primaryColor" />
                      </div>
                    )}
                  </label>
                  <input type="file" className='sr-only' id='postPicture' onChange={handleFileChange} />
                  
                  <button type='button' onClick={handleDeleteImage} className='w-fit bg-red-600 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5'>
                    Hapus Gambar
                  </button>

                    <div className="mt-4 flex gap-2">
                        {data?.categories.map((category) => (
                            <Link to={`/artikel?category=${category.name}`} className='text-textColor text-sm inline-block mt-4 md:text-base'>
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <div className="d-form-control w-full">
                      <label htmlFor="title" className='d-label'>
                        <span className='d-label-text'>Judul Artikel</span>
                      </label>
                      <input id='title' value={title} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]' 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder='Judul Artikel' />
                    </div>

                    <div className="d-form-control w-full">
                      <label htmlFor="caption" className='d-label'>
                        <span className='d-label-text'>Caption Singkat</span>
                      </label>
                      <input id='caption' value={caption} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]' 
                      onChange={(e) => setCaption(e.target.value)} 
                      placeholder='Cara merawat gigi dengan benar' />
                    </div>

                    <div className="d-form-control w-full">
                      <label htmlFor="slug" className='d-label'>
                        <span className='d-label-text'>Judul URL</span>
                      </label>
                      <input id='slug' value={postSlug} className='d-input d-input-bordered border-slate-300 !outline-stone-300 text-xl font-[600] text-headingColor md:text-[26px]' 
                      onChange={(e) => setPostSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())} 
                      placeholder='cara-merawat-gigi' />
                    </div>
                    
                    <div className="mb-5 mt-2">
                      <label className='d-label'>
                        <span className='d-label-text'>Kategori</span>
                      </label>
                      {isPostDataLoaded && <MultiSelectTagDropdown 
                      loadOptions={promiseOptions} 
                      defaultValue={data.categories.map(categoryToOption)}
                      onChange={(newValue) => setCategories(newValue.map((item) => item.value))} />}
                    </div>
                    
                    <div className="mb-5 mt-2">
                      <label className='d-label'>
                        <span className='d-label-text'>Tagar</span>
                      </label>
                      {isPostDataLoaded && <CreatableSelect 
                      defaultValue={data.tags.map((tag) => ({
                        value: tag,
                        label: tag,
                      }))}
                      isMulti
                      onChange={(newValue) => setTags(newValue.map((item) => item.value))} 
                      className='relative z-20' />}
                    </div>
                    
                    <div className="w-full mt-5">
                      {isPostDataLoaded && (
                        <Editor content={data?.body} editable={true} onDataChange={(data) => {
                          setBody(data)
                        }} />
                      )}
                    </div>

                    <button 
                    type='button' 
                    disabled={isLoadingUpdatePostDetail}
                    onClick={handleUpdatePost} 
                    className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70">
                      Update
                    </button>
                </article>
            </section>
        )}
      </>
    )
}

export default EditPost