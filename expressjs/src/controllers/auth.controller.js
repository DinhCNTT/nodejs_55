import { responseSuccess } from "../common/helpers/response.helper.js";
import { authService } from "../services/auth.service.js";

// cấu hình cookies để chặn JS truy cập vào cookie, chống tấn công XSS
const COOKIE_OPTIONS = {
    httpOnly: true, // client-side JS (không có trong) -> an toàn hơn
    sameSite: "lax", // chỉ gửi cookie khi request đến cùng domain
    secure: false, // chỉ gửi HTTPS (sử dụng true khi deploy lên hosting)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày tính bằng milliseconds
};

export const authController = {
    async login(req, res, next) {
        const { accessToken, refreshToken } = await authService.login(req);
        // lưu refresh token vào cookie
        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        const response = responseSuccess({
            accessToken,
            refreshToken
        }, `Login successfully`);
        res.status(response.statusCode).json(response);
    },

    async register(req, res, next) {
        const result = await authService.register(req);
        const response = responseSuccess(result, `Register successfully`);
        res.status(response.statusCode).json(response);
    },
    //api 1 forgot-password
    //in-put: email
    //out-put: gửi mã change password về response
    async forgotPassword(req, res, next) {
        const codeChangePassword = await authService.forgotPassword(req);
        res.status(200).json({ codeChangePass: codeChangePassword });
    },
    //api 2 change-password
    //in-put: email, mã change password, password mới
    //out-put: password mới

};
