import nc from "next-connect";
import Product from "../../../models/Product";

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
    const qNew = req.query.new;
  const qCategory = req.query.category;
  const qSize = req.query.size;
  const qColor = req.query.color;

  try {
    let products;

    if (qCategory && qSize && qColor) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
        size: {
          $in: [qSize],
        },
        color: {
          $in: [qColor],
        },
      });
    } else if (qCategory && qSize) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
        size: {
          $in: [qSize],
        },
      });
    } else if (qCategory && qColor) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
        color: {
          $in: [qColor],
        },
      });
    } else if (qSize && qColor) {
      products = await Product.find({
        size: {
          $in: [qSize],
        },
        color: {
          $in: [qColor],
        },
      });
    } else if (qNew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else if (qSize) {
      products = await Product.find({
        size: {
          $in: [qSize],
        },
      });
    } else if (qColor) {
      products = await Product.find({
        color: {
          $in: [qColor],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
  })

  .post(async (req, res) => {
    const newProduct = new Product(req.body);
  try {
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json(err);
  }
  })

export default handler;
