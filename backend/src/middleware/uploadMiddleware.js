import fs from 'fs';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userId = req.user.id;
        const uploadPath = path.join('uploads', String(userId));
        // Cria a pasta do usuário se não existir
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Pega extensão do arquivo original
        const ext = path.extname(file.originalname);
        // Nome único: timestamp + extensão
        cb(null, `${Date.now()}${ext}`);
    },
});

const upload = multer({ storage });

export default upload;
