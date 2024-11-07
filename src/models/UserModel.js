const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: 'Bạn chưa đặt tên' },
    birthday: { type: Date },
    address: { type: String },
    numPhone: { type: String },
    idValid: { type: Boolean },
    email: { 
        type: String, 
        required: [true, 'Email là bắt buộc'], 
        unique: true, // Đảm bảo email là duy nhất
        match: [/\S+@\S+\.\S+/, 'Email không hợp lệ'] // Kiểm tra định dạng email
    },
    password: { type: String, required: true },
    status: { type: String },
    points: { type: Number, default: 0 },
    images: [{type: String, default: null}] // Adding images array to store user images
}, {
    timestamps: true
});

// Create model from schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
