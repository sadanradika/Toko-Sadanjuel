import Express from "express";
import cors from "cors";
import TshirtRouter from "./routes/TshirtRoutes.js"
import ImageRouter from "./routes/ImageRoutes.js"

const app = Express()

app.use(cors());
app.use(Express.json())
app.use(TshirtRouter)
app.use(ImageRouter)

app.listen(4000, () => console.log("okee"));