import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
        if (err && err.code == "ENOENT") {
            // Jika file tidak ada
            console.log(`Tidak ada file bernama ${filename}, tidak akan dihapus.`);
        } else if (err) {
            console.log(err.message);
            console.log(`Error occured while trying to remove file ${filename}`);
        } else {
            console.log(`File ${filename} terhapus`);
        }
    });
};

export {
    fileRemover
};