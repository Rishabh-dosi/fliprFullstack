const User = require("../modals/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const env = require("dotenv");

env.config();

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).json({ message: "All input is required" });
    }
    const user = await User.findOne({ email });
    if (!(user && (await bcrypt.compare(password, user.password)))) {
        return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(req.body, 'secret-key' , {expiresIn: '2d'})
    res.status(200).json({
        msg: "login successfully",
        token: token,
    })
};
module.exports = login;