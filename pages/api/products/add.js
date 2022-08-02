import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/Product";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        const data = JSON.parse(req.body)
            let p = new Product({
                title: data.title,
                sku: data.sku,
                desc: data.desc,
                hsn_code: data.hsn_code,
                img: data.img,
                categories: data.categories,
                size: data.size,
                color: data.color,
                quantity: data.quantity,
                isManageble: data.isManageble,
                price: data.price,
                p_price: data.p_price,
            })

            await p.save()


        res.status(201).json({success:"success",data : p})


    } else {
        res.status(400).json({error:"This Method is not allowed"})
    }
}

export default connectDB(handler)