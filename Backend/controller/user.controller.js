import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        //checking user already exists or not
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        //creating new user
        const createdUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await createdUser.save();
        res.status(201).json({
            message: "user created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        })

    } catch (error) {
        console.log("Error!!," + error.message)
        res.status(500).json({ message: "internal server error" })

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }


        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" })
        }

        res.status(200).json({
            message: "Login successfully!!",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        })
    } catch (error) {
        console.log("Error!!," + error.message);
        res.status(500).json({ message: "Internal server error!!" });
    }
}