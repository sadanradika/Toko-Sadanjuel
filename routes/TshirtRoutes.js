import express from "express";
import { createTshirt, deleteTshirt, editTshirt, getTshirt, getTshirtById } from "../models/TshirtModel.js";

const router = express.Router();

router.get("/tshirt",
    async (req, res) => {
        try {
            const response = await getTshirt();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
        }
    }
)

router.get("/tshirt/:id",
    async (req, res) => {
        try {
            const response = await getTshirtById(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
        }
    }
)

router.post("/tshirt",
    async (req, res) => {
        try {
            const data = Object.values(req.body);
            const response = await createTshirt(...data);
            res.status(201).json({ msg: "Data berhasil di buat" })
        } catch (error) {
            console.log(error.message);
        }
    }
)

router.put("/tshirt/:id",
    async (req, res) => {
        try {
            const data = Object.values(req.body);
            const id = req.params.id;
            const response = await editTshirt(id, ...data);
            res.status(201).json(response)
        } catch (error) {
            console.log(error.message);
        }
    }
)

router.delete("/tshirt/:id",
    async (req, res) => {
        try {
            await deleteTshirt(req.params.id);
            res.status(200).json({ msg: "Data berhasil di hapus" });
        } catch (error) {
            console.log(error.message);
        }
    }
)

export default router;