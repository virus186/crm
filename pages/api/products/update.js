import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        for(let i=0; i< req.body.length; i++){
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }

        res.status(201).json({success:"success"})


    } else {
        res.status(400).json({error:"This Method is not allowed"})
    }
}

export default connectDB(handler)