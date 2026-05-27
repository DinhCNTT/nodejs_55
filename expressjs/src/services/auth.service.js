import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { signAccessToken, signRefreshToken } from "../common/helpers/jwt.helper.js";

export const authService = {
    async login(req) {
        const { email, password } = req.body;
        console.log(email, password);

        //kiểm tra email xem có tồn tại không
        //nếu chưa tồn tại thì trả lỗi, kêu người dùng đăng ký
        //nếu đã tồn tại thì so sánh password
        const existingUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (!existingUser) {
            throw new BadRequestError(`Người dùng không tồn tại, vui lòng đăng ký`);
        }

        const isPasswordValid = bcrypt.compareSync(password, existingUser.password); //true

        if (!isPasswordValid) {
            throw new BadRequestError(`Thông tin người dùng không đúng, vui lòng thử lại`);
        }
        //tạo access token và refresh token
        //Bước 1: Tạo payload (thông tin user) - thường chứa userId, email,...
        const payload = {
            userId: existingUser.id,
            email: existingUser.email,
        };

        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        return {
            accessToken,
            refreshToken
        };
    },

    async register(req) {
        const { email, password, fullname } = req.body;
        console.log(email, password, fullname);

        //kiểm tra email đã tồn tại chưa, nếu đã tồn tại thì trả về lỗi, nếu chưa tồn tại thì tạo mới user
        const existingUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        const hashPassword = await bcrypt.hash(password, 10);

        if (existingUser) {
            throw new BadRequestError(`Người dùng đã tồn tại, vui lòng đăng nhập`);
        }

        // Mã hóa password (băm) với độ khó (saltRounds) là 10
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await prisma.users.create({
            data: {
                email: email,
                password: hashedPassword,
                fullName: fullname,
            },
        });

        return true;
    },
    async forgotPassword(req) {
        const { email } = req.body;

        const existingUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (!existingUser) {
            throw new BadRequestError(`Người dùng không tồn tại, vui lòng đăng ký`);
        }

        //tạo mã xác minh gồm 6 số ngẫu nhiên
        const changePassCode = crypto.randomBytes(20).toString('hex');
        //lưu mã xác minh vào database
        await prisma.users.update({
            where: {
                email: email,
            },
            data: {
                codeChangePass: changePassCode,
            },
        });
        return changePassCode;
    }
};
