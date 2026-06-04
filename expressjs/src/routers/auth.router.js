import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { authMiddleware } from '../common/middleware/auth.middleware.js';
import { protectMiddleware } from '../common/middleware/protect.middleware.js';
import { authCookie } from "../common/middleware/authCookie.middleware.js";
import passport from "passport";

const authRouter = express.Router();

// Tạo route CRUD
// http://localhost:3069/api/auth/login
authRouter.post('/login', authController.login);
// http://localhost:3069/api/auth/register
authRouter.post('/register', authController.register);
// http://localhost:3069/api/auth/forgot-password
authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.get("/get-info", authCookie, authController.getInfo);
authRouter.post("/refresh-token", authController.refreshToken);

authRouter.get("/google",
    passport.authenticate('google', { scope: ['profile', 'email'], session: false, prompt: "select_account" }));

authRouter.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login", session: false }),
    // function (req, res) {
    //     console.log("middleware tiếp theo sau khi verify thành công", req.user);
    //     // Successful authentication, redirect home.
    //     res.redirect("http://localhost:3000"); // Hoặc res.redirect("/") tuỳ frontend của bạn
    // }
    authController.googleCallback,
);

export default authRouter;
