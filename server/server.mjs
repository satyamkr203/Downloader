import dotenv from 'dotenv'
dotenv.config();

// importing each routes here...
import authRoutes from './routes/authRoutes.mjs';
import youtubeRoutes from './routes/youtubeRoutes.mjs';
import instagramRoutes  from './routes/instagramRoutes.mjs';
import tiktokRoutes  from './routes/tiktokRoutes.mjs';
import twitterRoutes  from './routes/twitterRoutes.mjs';

import cors from 'cors';
import express, { urlencoded } from 'express'
import morgan  from 'morgan';

const port = process.env.PORT || 5000;
const app = express();

// using middlewares
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));

// defining the routes 
app.use("/api/auth", authRoutes)
app.use("/api/youtube", youtubeRoutes);
app.use("/api/instagram", instagramRoutes);
app.use("/api/tiktok", tiktokRoutes);
app.use("/api/twitter", twitterRoutes);


app.get('/test', (req, res) =>{
    console.log('connected to the server ');
    res.status(200).json({
        msg:"server is fine!"
    })
})


app.listen(port, () =>{
    console.log(`server is running on the port ${port}`);
})




