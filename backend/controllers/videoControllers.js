import {
    uploadPicture
} from '../middleware/uploadPictureMiddleware';
import Video from '../models/Video';
import {
    fileRemover
} from '../utils/fileRemover';
import {
    v4 as uuidv4
} from "uuid";

const createVideo = async (req, res, next) => {
    try {
        const video = new Video({
            title: "sample video",
            caption: "sample video caption",
            vidurl: "PoxkMmW5CFM",
            slug: uuidv4(),
            body: {
                type: "doc",
                content: [],
            },
            photo: "",
            user: req.user._id,
        });

        const createdVideo = await video.save();
        return res.json(createdVideo);
    } catch (error) {
        next(error);
    }
};

const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findOne({
            slug: req.params.slug
        });

        if (!video) {
            const error = new Error("Video tidak ditemukan!");
            next(error);
            return;
        }

        const upload = uploadPicture.single("postPicture");

        const handleUpdateVideoData = async (data) => {
            const {
                title,
                caption,
                vidurl,
                slug,
                body,
                tags,
                categories
            } = JSON.parse(data);
            video.title = title || video.title;
            video.caption = caption || video.caption;
            video.vidurl = vidurl || video.vidurl;
            video.slug = slug || video.slug;
            video.body = body || video.body;
            video.tags = tags || video.tags;
            video.categories = categories || video.categories;
            const updatedVideo = await video.save();
            return res.json(updatedVideo);
        };

        upload(req, res, async function (err) {
            if (err) {
                const error = new Error(
                    "An unknown error occured when uploading " + err.message
                );
                next(error);
            } else {
                // every thing went well
                if (req.file) {
                    let filename;
                    filename = video.photo;
                    if (filename) {
                        fileRemover(filename);
                    }
                    video.photo = req.file.filename;
                    handleUpdateVideoData(req.body.document);
                } else {
                    let filename;
                    filename = video.photo;
                    video.photo = "";
                    fileRemover(filename);
                    handleUpdateVideoData(req.body.document);
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findOneAndDelete({
            slug: req.params.slug
        });

        if (!video) {
            const error = new Error("Video tidak ditemukan!");
            return next(error);
        }

        fileRemover(video.photo);

        return res.json({
            message: "Video berhasil dihapus!",
        });
    } catch (error) {
        next(error);
    }
};

const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findOne({
            slug: req.params.slug
        }).populate([{
                path: "user",
                select: ["avatar", "name"],
            },
            {
                path: "categories",
                select: ["title"],
            },
        ]);

        if (!video) {
            const error = new Error("Video tidak ditemukan!");
            return next(error);
        }

        return res.json(video);
    } catch (error) {
        next(error);
    }
};

const getAllVideos = async (req, res, next) => {
    try {
        const filter = req.query.searchKeyword;
        let where = {};
        if (filter) {
            where.title = {
                $regex: filter,
                $options: "i"
            };
        }
        let query = Video.find(where);
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * pageSize;
        const total = await Video.find(where).countDocuments();
        const pages = Math.ceil(total / pageSize);

        res.header({
            "x-filter": filter,
            "x-totalcount": JSON.stringify(total),
            "x-currentpage": JSON.stringify(page),
            "x-pagesize": JSON.stringify(pageSize),
            "x-totalpagecount": JSON.stringify(pages),
        });

        if (page > pages) {
            return res.json([]);
        }

        const result = await query
            .skip(skip)
            .limit(pageSize)
            .populate([{
                    path: "user",
                    select: ["avatar", "name", "verified"],
                },
                {
                    path: "categories",
                    select: ["title"],
                },
            ])
            .sort({
                updatedAt: "desc"
            });

        return res.json(result);
    } catch (error) {
        next(error);
    }
};

export {
    createVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getAllVideos
};