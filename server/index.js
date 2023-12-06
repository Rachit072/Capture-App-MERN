import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit:"35mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"35mb",extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://newuser:QfaA2AMiyNtoPPd3@cluster0.xlq1oso.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;
mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

