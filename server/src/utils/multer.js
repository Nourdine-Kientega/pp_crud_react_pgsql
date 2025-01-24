const multer =  require('multer');
const path  = require('path');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, './src/uploads/images'); // Folder where image will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload =  multer({ storage });

module.exports = upload;   