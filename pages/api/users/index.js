import nc from "next-connect";
import User from "../../../models/User";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const connectDB = require('../../../utils/connectDB')

connectDB()

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  //.use(someMiddleware())
  .get(async (req, res) => {
    try {
      const users = await User.find({});
      res.status(201).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  })

  .post(async (req, res) => {
    const { name, email, mobile, password } = req.body;
    /* const newUser = new User({name,email,mobile,password,role:'2',user_id:'1'})
    try {
      const user = await newUser.save()
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }  */
    // console.log(req.body);
    const newUser = new User({
      name: name,
      email: email.toLowerCase(),
      password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
      role: "2",
      user_id: "1",
      mobile: mobile,
    })
    // console.log(newUser);
    try {
      const createdUser = await newUser.save();
      console.log("try");
      console.log(createdUser);
      res.status(201).json(createdUser);
    } catch (err) {
      res.status(500).json(err);
    }
  })

export default handler;
