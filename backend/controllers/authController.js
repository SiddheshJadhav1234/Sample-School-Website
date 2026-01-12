import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

export const signup = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
     
    if (password !== confirmpassword) {
        return res.status(400).json({ message: "Password do not match" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    });
 
    res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
    const { email, password, role } = req.body;

    // Fixed credentials for admin and teachers
    const adminCredentials = {
        email: "admin@school.com",
        password: "admin123",
        role: "admin",
        name: "School Administrator"
    };

    const teacherCredentials = [
        {
            email: "teacher1@school.com",
            password: "teacher123",
            role: "teacher",
            name: "Teacher One"
        },
        {
            email: "teacher2@school.com",
            password: "teacher123",
            role: "teacher",
            name: "Teacher Two"
        }
    ];

    // Check if it's admin login
    if (email === adminCredentials.email) {
        if (password !== adminCredentials.password) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: "admin_id", role: "admin" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.json({
            token,
            user: {
                name: adminCredentials.name,
                email: adminCredentials.email,
                role: adminCredentials.role,
            },
        });
    }

    // Check if it's teacher login
    const teacher = teacherCredentials.find(t => t.email === email);
    if (teacher) {
        if (password !== teacher.password) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: teacher.email, role: "teacher" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.json({
            token,
            user: {
                name: teacher.name,
                email: teacher.email,
                role: teacher.role,
            },
        });
    }

    // Regular user login (students and parents)
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (role && user.role !== role) {
        return res.status(400).json({ message: "Invalid Role" });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        token,
        user: {
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
};