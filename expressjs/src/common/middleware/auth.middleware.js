import { access } from "node:fs";
import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

//nhận request từ client 
export const authMiddleware = async (req, res, next) => {
    //Bưới 1 : đọc token từ header 'authorization' (Bearer <token>)
    const authHeader = req.headers.authorization;
    // Bước 2: kiểm tra token có hợp lệ không
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("Vui lòng đăng nhập để tiếp tục");
    }
    //Bước 3 : tách bearer và token ra
    const accessToken = authHeader.split(" ")[1];
    //Bước 4: xác thực token
    const decodedToken = verifyAccessToken(accessToken);

    console.log("decodedToken", decodedToken);
    //Bước 5: gán thông tin user vào req.user để controller sử dụng
    // req.user = decodedToken;
    //Bước 6: tiếp tục xử lý request
    const userExist = await prisma.users.findUnique({
        where: {
            id: decodedToken.userId,
        },
    });
    if (!userExist) {
        throw new UnauthorizedError("Người dùng không tồn tại");
    }

    req.accessToken = accessToken;
    req.refreshToken = refreshToken;

    //Bước 6: tiếp tục xử lý request
    req.user = userExist;
    next();
}