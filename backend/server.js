import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path, { resolve } from 'path'
import Pusher from 'pusher'
import { rejects } from 'assert'

Grid.mongo = mongoose.mongo

// app config
const app = express()
const port = process.env.PORT || 9000

// middlewares
app.use(bodyParser.json())
app.use(cors())

// db config
const mongoURI = "mongodb+srv://ian123:ian123@iancode09.va6uv.mongodb.net/facebook-clone?retryWrites=true&w=majority"

const conn = mongoose.createConnection(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})

let gfs

conn.once('open', () => {
    console.log('DB Connected');

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images') 
})

const storage = new GridFsStorage({
    url: mongoURI,
    file:(req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {
                filename,
                bucketName: 'images'
            }

            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage })

mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})

// api routes
app.get('/', (req, res) => res.status(200).send('Hello There'))

app.post('/upload/image', upload.single('file'), (req, res) => {
    res.status(201).send(req.file)  
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))