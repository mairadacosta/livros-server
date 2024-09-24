import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";  

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/api/auth", authRoutes);

const port = 5000;
app.listen(port, () => console.log(`Tá rodando na porta: >>${port}!<< :D !!`));
