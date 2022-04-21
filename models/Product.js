const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  title: { type: String, required: true},
  sku: { type: String, required: true, unique:true },
  desc: { type: String, required: true },
  hsn_code: { type: String},
  img: { type: String, required: true },
  categories: { type: Array },
  size: {  type: Array  },
  color: {  type: Array  },
  quantity: { type: Number, default: 1 },
  isManageble: { type: Boolean, default: false },
  price: { type: Number,  required: true  },
  p_price: { type: Number,  required: true  }
},{timestamps:true})

mongoose.models = {}

export default mongoose.model('Product', productSchema )


