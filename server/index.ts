import express from 'express';
import dotenv from 'dotenv';

/* CONFIGURATION */
dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 9000;


app.get("/", (_, res) => {
    res.status(200).json({ msg: "Server is up and running" });
});

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));