import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db';
import {
    errorResponserHandler,
    invalidPathHandler
} from './middleware/errorHandler';

// ROUTES
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'
import commentRoutes from './routes/commentRoutes'
import postCategoriesRoutes from './routes/postCategoriesRoutes'
import videoRoutes from './routes/videoRoutes'
import obatRoutes from './routes/obatRoutes'

dotenv.config();
connectDB();
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running...");
})

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/post-categories", postCategoriesRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/obats", obatRoutes);

// STATIC ASSETS
app.use("/uploads", express.static(path.join(__dirname, '/uploads')))

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));