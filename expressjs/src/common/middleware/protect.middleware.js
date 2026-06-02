import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";

export const protectMiddleware = async (req, res, next) => {
    //Bưới 1 : đọc token từ header 'authorization' (Bearer <token>)
    const authHeader = req.headers.authorization;
    // Bước 2: kiểm tra token có hợp lệ không
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Vui lòng đăng nhập để tiếp tục");
    }
    //Bước 3 : tách bearer và token ra
    const accessToken = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(accessToken, {
        ignoreExpiration:
            true
    });
    req.user = decoded;
    req.accessToken = accessToken;
    next();
}