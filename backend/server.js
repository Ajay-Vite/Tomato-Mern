import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js'

// app
const app = express();
const port = 8000;

// middleware

app.use(express.json());
app.use(cors());

// DataBase

connectDb();

// api endpoint

app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send('<h1>API WORKING</h1>')
});

app.listen(port, () => {
    console.log(`Server is running on port : http://localhost:${port}`);
});

