import Tienda from "../models/tienda";

export const getTienda = async (req, res) => {
    const tienda = await Tienda.find();
    res.status(200).json(tienda);
}
export const editTienda = async (req, res)=>{
    const tienda= await Tienda.findById(req.parms.TiendaId, req.body, {new: true});
    console.log(tienda)
    res.status(200).json(tienda);
}