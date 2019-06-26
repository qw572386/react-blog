const Mongoose = require('mongoose')
const schema = Mongoose.Schema;
const UserSchema = new schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        reqire: true
    },
    userName: {
        type: String,
        require: true
    },
    auth: {
        type: Number,
        default: 0 // 0: 普通， 1：管理员
    }
})
module.exports = mongoose.model('User', UserSchema)