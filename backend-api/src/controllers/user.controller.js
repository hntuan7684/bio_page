const JSend = require("../jsend");

const userService = require("../services/user.service");

async function createUser(req, res, next) {
    const { first_name, last_name, email, phone, password } = req.body;

    // Kiểm tra các trường bắt buộc
    if (!first_name || !last_name || !email || !phone || !password) {
        return res.status(400).json({
            message: 'All fields are required!'
        });
    }

    // Kiểm tra email đã tồn tại chưa
    const emailExists = await userService.isEmailExist(email);
    if (emailExists) {
        return res.status(400).json({
            message: 'Email exists!'
        });
    }

    // Kiểm tra số điện thoại đã tồn tại chưa
    const phoneExists = await userService.isPhoneExist(phone);
    if (phoneExists) {
        return res.status(400).json({
            message: 'Phone exists!'
        });
    }

    try {
        // Tạo người dùng mới
        const newUser = await userService.createUser(first_name, last_name, email, phone, password);
        if (!newUser) {
            return res.status(500).json({
                message: 'Register failed!'
            });
        }

        // Đăng ký thành công
        return res.status(201).json(JSend.success({
            message: 'Register successfully!'
        }));
    } catch (err) {
        next(err); // Chuyển lỗi sang middleware xử lý lỗi
    }
}

module.exports = {
    createUser,
};
