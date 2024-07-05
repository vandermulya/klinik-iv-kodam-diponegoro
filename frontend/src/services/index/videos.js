import axios from "axios";

export const getAllVideos = async (searchKeyword = "", page = 1, limit = 10) => {
    try {
        const {
            data,
            headers
        } = await axios.get(
            `/api/videos?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
        );
        return {
            data,
            headers
        };
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const getSingleVideo = async ({
    slug
}) => {
    try {
        const {
            data
        } = await axios.get(`/api/videos/${slug}`);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const deleteVideo = async ({
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
        } = await axios.delete(`/api/videos/${slug}`, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const updateVideo = async ({
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
        } = await axios.put(`/api/videos/${slug}`, updatedData, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const createVideo = async ({
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
        } = await axios.post(`/api/videos`, {}, config);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};