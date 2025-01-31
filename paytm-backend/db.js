// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhishekpatidar901:gq0MHxTBcjZuhopG@cluster0.dpx1zbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});
const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
});
const Account = mongoose.model('Account', accountSchema);
// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
	User , Account
};