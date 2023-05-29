import express from 'express';
import { config } from 'dotenv';
import connect from './database/connection.js';
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express()


// app.use(cors());
app.use(
    cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
})
);
app.options(
    "*",
cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
})
);

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
config();

const port = process.env.PORT || 8080;




connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})