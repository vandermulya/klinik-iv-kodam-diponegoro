import {
    Schema,
    model
} from "mongoose";

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    vidurl: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: Object,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tags: {
        type: [String]
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "PostCategories"
    }],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

const Video = model("Video", VideoSchema);
export default Video;