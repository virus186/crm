import nc from "next-connect";
import User from "../../../models/User";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const connectDB = require('../../../utils/connectDB')

connectDB()

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})

  .post(async (req, res) => {
    const { email, password } = req.body;
    const users = await User.findOne({email : email })
    let decrypt_pass = '';
    if(users){
        decrypt_pass = CryptoJS.AES.decrypt(users.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8)
        if(CryptoJS.AES.decrypt(users.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8) == password){
            const { password , ...others } = users._doc
        const token = jwt.sign({
            id: users._id,
            role_id: users.role
        },
        process.env.JWT_SEC,
        {expiresIn: "1H"},
        )
        res.status(200).json({ ...others, token })        
   
        }
        res.status(400).json({error:"Incorrect Password"})
    }
    res.status(400).json({error:"Incorrect Email id"})
  })

export default handler;
