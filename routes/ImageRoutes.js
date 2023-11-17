import express from "express"
import multer from "multer"
import fs from "fs"

const router = express.Router()

const upload = multer({ dest: 'images/', limits: { fileSize: 4194304 } })

router.get('/image/:imageName',
    (req, res) => {
        // do a bunch of if statements to make sure the user is 
        // authorized to view this image, then

        const imageName = req.params.imageName
        const readStream = fs.createReadStream(`images/${imageName}`)
        readStream.pipe(res)
    }
)

router.post("/image", upload.single('image'),
    (req, res) => {
        try {
            const originalImageName = req.file.filename;
            res.send({ originalImageName })
        } catch (error) {
            console.log(error.message);
        }
    }
)

export default router;