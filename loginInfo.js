const { Schema , model } = require('mongoose')

const loginInfoSchema = new Schema({
    Email: { type: String , uniqure: false},
    Password: { type: String }
})

const User = model('loginSchema', loginInfoSchema)

module.exports = User;
