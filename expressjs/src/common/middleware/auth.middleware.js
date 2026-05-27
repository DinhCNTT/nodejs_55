import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";

//nhận request từ client 
export const authMiddleware = (req, res, next) => {
    //Bưới 1 : đọc token từ header 'authorization' (Bearer <token>)
    const authHeader = req.headers.authorization;
    // Bước 2: kiểm tra token có hợp lệ không
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Vui lòng đăng nhập để tiếp tục");
    }
    //Bước 3 : tách bearer và token ra
    const token = authHeader.split(" ")[1];
    //Bước 4: xác thực token
    const decodedToken = verifyAccessToken(token);
    //Bước 5: gán thông tin user vào req.user để controller sử dụng
    req.user = decodedToken;
    //Bước 6: tiếp tục xử lý request
    next();
}