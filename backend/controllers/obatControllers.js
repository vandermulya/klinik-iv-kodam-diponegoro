import Obat from "../models/Obat";
import {
    v4 as uuidv4
} from "uuid";

const createObat = async (req, res, next) => {
    try {
        // Mengambil data dari body request atau menggunakan sample data
        const {
            title,
            indikasi,
            komposisi,
            dosis,
            aturanpakai,
            efeksamping
        } = req.body;

        // Membuat slug unik menggunakan uuid jika tidak diberikan
        const slug = req.body.slug || uuidv4();

        const sampleData = {
            title: title || 'Obat Baru',
            indikasi: indikasi || 'Indikasi Obat Baru',
            komposisi: komposisi || 'Komposisi Obat Baru',
            dosis: dosis || 'Dosis Obat Baru',
            aturanpakai: aturanpakai || 'Aturan Pakai Obat Baru',
            efeksamping: efeksamping || 'Efek Samping Obat Baru',
            slug: slug
        };

        // Membuat instance baru dari model Obat dengan sample data
        const newObat = new Obat(sampleData);

        // Menyimpan obat baru ke database
        await newObat.save();

        // Mengirim respon sukses dengan data obat yang baru dibuat
        res.status(201).json({
            message: 'Data obat berhasil dibuat!',
            data: newObat
        });
    } catch (error) {
        // Menangani error yang terjadi dan mengirim respon error
        next(error);
    }
};

const updateObat = async (req, res, next) => {
    try {
        // Mencari entri obat berdasarkan slug
        const obat = await Obat.findOne({
            slug: req.params.slug
        });

        // Jika obat tidak ditemukan, kembalikan error 404
        if (!obat) {
            return res.status(404).json({
                message: "Data obat tidak ditemukan!"
            });
        }

        // Mengambil data dari body request
        const {
            title,
            indikasi,
            komposisi,
            dosis,
            aturanpakai,
            efeksamping,
            slug,
        } = req.body;

        // Memperbarui properti obat dengan data baru atau mempertahankan data lama
        obat.title = title || obat.title;
        obat.indikasi = indikasi || obat.indikasi;
        obat.komposisi = komposisi || obat.komposisi;
        obat.dosis = dosis || obat.dosis;
        obat.aturanpakai = aturanpakai || obat.aturanpakai;
        obat.efeksamping = efeksamping || obat.efeksamping;
        obat.slug = slug || obat.slug;

        // Menyimpan obat yang telah diperbarui ke database
        const updatedObat = await obat.save();

        // Mengirim respon sukses dengan data obat yang telah diperbarui
        return res.status(200).json({
            message: 'Data obat berhasil diperbarui!',
            data: updatedObat
        });
    } catch (error) {
        // Menangani error yang terjadi dan mengirim respon error
        next(error);
    }
};

const deleteObat = async (req, res, next) => {
    try {
        // Mencari entri obat berdasarkan slug
        const obat = await Obat.findOne({
            slug: req.params.slug
        });

        // Jika obat tidak ditemukan, kembalikan error 404
        if (!obat) {
            return res.status(404).json({
                message: "Data obat tidak ditemukan!"
            });
        }

        // Menghapus obat dari database
        await obat.remove();

        // Mengirim respon sukses dengan pesan bahwa obat telah dihapus
        return res.status(200).json({
            message: 'Data obat berhasil dihapus!'
        });
    } catch (error) {
        // Menangani error yang terjadi dan mengirim respon error
        next(error);
    }
};

const getObat = async (req, res, next) => {
    try {
        // Mengambil semua data obat dari database
        const obats = await Obat.find();

        // Mengirim respon dengan data obat yang berhasil diambil
        res.status(200).json(obats);
    } catch (error) {
        // Menangani error yang terjadi dan mengirim respon error
        next(error);
    }
};

const getSingleObat = async (req, res, next) => {
    try {
        const obat = await Obat.findOne({
            slug: req.params.slug
        });

        if (!obat) {
            const error = new Error("Data obat tidak ditemukan!");
            return next(error);
        }

        return res.json(obat);
    } catch (error) {
        next(error);
    }
};

export {
    createObat,
    updateObat,
    deleteObat,
    getObat,
    getSingleObat
};