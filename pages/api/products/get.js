import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req,res) => {
    const id = req.query.id
    let products = await Product.find(id)
    console.log(id)
    console.log(products)
    res.status(201).json({products})
}

export default connectDB(handler)