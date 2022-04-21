const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true,
    },
    address: {
        type: String,
        required : true,
    },
    mobile: {
        type: Number,
        required : true,
    },
    due: {
        type: Number,
        required : true,
    },
    advance: {
        type: Number,
        required : true,
    },
    role: {
        type: String,
        required : true,
    },
    user_id: {
        type: String,
    },
},{timestamp: true})

mongoose.models = {}

export default  mongoose.model("Customers", CustomerSchema);