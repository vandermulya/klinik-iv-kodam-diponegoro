import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-full rounded-lg text-white text-center font-semibold bg-red-600 mx-auto px-4 py-2 max-w-md">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage