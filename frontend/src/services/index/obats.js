import axios from "axios";

export const getObat = async ({
    slug
}) => {
    try {
        const {
            data
        } = await axios.get(`/api/obats/${slug}`);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const deleteObat = async ({
    slug,
    token
}) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const {
            data
        } = await axios.delete(`/api/obats/${slug}`, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const updateObat = async ({
    updatedData,
    slug,
    token
}) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const {
            data
        } = await axios.put(`/api/obats/${slug}`, updatedData, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const createObat = async ({
    token
}) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const {
            data
        } = await axios.post('/api/obats', {}, config);
        // console.log('createObat response data:', data); // Tambahkan log untuk memeriksa respons
        return data; // Pastikan data mencakup slug obat baru
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};