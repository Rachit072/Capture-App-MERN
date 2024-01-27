import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"35mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"35mb",extended: true}));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)))
    .catch((error)=>console.log(error.message));


