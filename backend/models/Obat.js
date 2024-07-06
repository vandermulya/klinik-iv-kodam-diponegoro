import {
    Schema,
    model
} from "mongoose";

const ObatSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    indikasi: {
        type: String,
        required: true
    },
    komposisi: {
        type: String,
        required: true
    },
    dosis: {
        type: String,
        required: true
    },
    aturanpakai: {
        type: String,
        required: true
    },
    efeksamping: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

const Obat = model("Obat", ObatSchema);
export default Obat;