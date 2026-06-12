//hàm tạo access token - refreshToken
//access token:
//- thường có thời gian sống ngắn (15 minutes)
//- chứa thông tin user (id,email,role)
//- lưu trữ ở localstorage

//refreshToken:
//- thường có thời gian sống dài hơn (30 days)
//- cấp mới access token khi hết hạn (để user không cần đăng nhập lại)
//- không chứa thông tin nhạy cảm (tránh trường hợp bị lộ)
//- lưu trữ ở httpOnly cookies
import jwt from "jsonwebtoken";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constant/app.constant.js";

export const signAccessToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "3h" });
};

export const verifyAccessToken = (token, options) => {
    return jwt.verify(token, JWT_SECRET, options);
};

export const signRefreshToken = (payload) => {
    return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, JWT_REFRESH_SECRET);
};