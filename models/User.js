const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
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
    mobile: {
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

export default  mongoose.model("Users", UserSchema);