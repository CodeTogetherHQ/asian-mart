import express from "express";
import dotenv from "dotenv";
import checkConnection from "./database/check-connection";

/* CONFIGURATION */
dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 9000;

app.get("/", (_, res) => {
  res.status(200).json({ msg: "Server is up and running" });
});

/* SERVER STATUS */
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

/* DATABASE CONNECTION STATUS */
checkConnection().catch((error: unknown) => {
  console.error("An error occurred while checking the connection:", error);
});
