import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        for(let i=0; i< req.body.length; i++){
            let p = new Product({
                title: req.body[i].title,
                sku: req.body[i].sku,
                desc: req.body[i].desc,
                hsn_code: req.body[i].hsn_code,
                img: req.body[i].img,
                categories: req.body[i].categories,
                size: req.body[i].size,
                color: req.body[i].color,
                quantity: req.body[i].quantity,
                isManageble: req.body[i].isManageble,
                price: req.body[i].price,
                p_price: req.body[i].p_price,
            })

            await p.save()

        }

        res.status(201).json({success:"success"})


    } else {
        res.status(400).json({error:"This Method is not allowed"})
    }
}

export default connectDB(handler)