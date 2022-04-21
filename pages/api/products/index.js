import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req,res) => {
    let products = await Product.find({})
    res.status(201).json({products})
}

export default connectDB(handler)