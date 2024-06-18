const User = require("../modals/userModal");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
    try {
        if (
            !(
                req.body.email &&
                req.body.password &&
                req.body.username
            )
        ) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email: req.body.email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = jwt.sign(req.body, 'secret-key', { expiresIn: '2d' })
        res.status(200).json({
            token: token
        })
        

        console.log("cookie set succesfully");

        
    } catch (error) {
        console.log("Gott an error", error);
    }
};
module.exports = createUser;