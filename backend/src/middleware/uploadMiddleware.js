import fs from 'fs';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userId = req.user.id;
        const uploadPath = path.join('upload', String(userId));
        console.log('Destino upload:', uploadPath);
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
            console.log('Pasta criada:', uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;
        console.log('Nome do arquivo:', filename);
        cb(null, filename);
    },
});

const upload = multer({ storage });

export default upload;
