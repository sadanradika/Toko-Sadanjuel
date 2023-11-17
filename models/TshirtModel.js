import { db } from "../Database.js";

export const getTshirt = async () => {
    const [result] = await db.query(
        "SELECT * FROM tshirt_design"
    )
    return result;
}

export const getTshirtById = async (id) => {
    const [result] = await db.query(
        "SELECT * FROM tshirt_design WHERE id = ?", [id]
    )
    return result;
}

export const createTshirt = async (nama_desain, tanggal, harga, nama_client, image) => {
    const [result] = await db.query(
        "INSERT INTO tshirt_design (nama_desain, tanggal, harga, nama_client, image) VALUE (?,?,?,?,?)", [nama_desain, tanggal, harga, nama_client, image]
    )
    const id = result.insertId;
    getTshirtById(id);
}

export const editTshirt = async (id, nama_desain, tanggal, harga, nama_client, image) => {
    const [result] = await db.query(
        "UPDATE tshirt_design SET nama_desain=(?), tanggal=(?), harga=(?), nama_client=(?), image=(?) WHERE id=(?)", [nama_desain, tanggal, harga, nama_client, id, image]
    )
    getTshirtById(id);
}

export const deleteTshirt = async (id) => {
    await db.query(
        "DELETE FROM tshirt_design WHERE id = (?)", [id]
    )
}