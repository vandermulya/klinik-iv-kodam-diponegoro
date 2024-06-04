import React, { useState } from "react"

const CommentForm = ({ 
    btnLabel, 
    formSubmitHanlder, 
    formCancelHandler = null, 
    initialText = "", 
    }) => {
    const [value, setValue] = useState(initialText);

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHanlder(value);
        setValue("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-col items-end border border-primaryColor rounded-lg p-4">
                <textarea className='w-full focus:outline-none bg-transparent' 
                placeholder='Tinggalkan komentar Anda di sini...' 
                rows="5" 
                value={value} onChange={(e) => setValue(e.target.value)} />

                <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
                    {formCancelHandler && (
                        <button onClick={formCancelHandler} className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500">
                            Batal
                        </button>
                    )}
                    <button type="submit" className="px-6 py-2.5 rounded-lg bg-primaryColor text-white font-semibold">
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm