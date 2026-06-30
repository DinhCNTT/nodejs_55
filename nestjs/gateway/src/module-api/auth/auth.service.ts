import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/module-system/prisma/prisma.service';
import bcrypt from 'bcrypt';
import { TokenService } from 'src/module-system/token/token.service';
import { LoginDTO } from './DTO/login.dto';
import type { Request } from 'express';
import { ScureBase32Plugin, TOTP, NobleCryptoPlugin } from 'otplib';

@Injectable() // đánh dấu là một provider
export class AuthService {
    private totp: TOTP;
    constructor(
        private prisma: PrismaService,
        private tokenService: TokenService,
    ) {
        this.totp = new TOTP({
            crypto: new NobleCryptoPlugin(),
            base32: new ScureBase32Plugin(),
        });
    }

    async login(body: LoginDTO) {
        // console.log({ body });
        const { email, password } = body;
        // console.log(email, password);
        //kiểm tra email xem có tồn tại không
        //nếu chưa tồn tại thì trả lỗi, kêu người dùng đăng ký
        //nếu đã tồn tại thì so sánh password
        const existingUser = await this.prisma.users.findUnique({
            where: {
                email: email,
            },
            omit: {
                password: false,
            },
        });

        if (!existingUser) {
            // throw new BadRequestError(`Account not valid, please try again`);
            throw new BadRequestException(
                `Người dùng không tồn tại, vui lòng đăng ký`,
            );
        }

        if (!existingUser.password) {
            throw new BadRequestException(
                `Vui lòng nhập đầy đủ thông tin hoặc vui lòng đăng ký lại`,
            );
        }

        const isPasswordValid = bcrypt.compareSync(password, existingUser.password); //true

        if (!isPasswordValid) {
            // throw new BadRequestException(`Account not valid, please try again.`);
            throw new BadRequestException(
                `Thông tin người dùng không đúng, vui lòng thử lại`,
            );
        }

        // Kiểm tra xác thực 2 lớp (2FA)
        if (existingUser.totpSecret) {
            if (!body.token) {
                return {
                    accessToken: null,
                    refreshToken: null,
                    isTotp: true,
                };
            }

            const isValid = await this.totp.verify(body.token, {
                secret: existingUser.totpSecret,
                epochTolerance: 30,
            });

            if (!isValid.valid) {
                throw new BadRequestException('Mã xác thực 2FA không đúng hoặc đã hết hạn');
            }
        }

        // tạo access token và refresh token
        // tạo access token
        const accessToken = this.tokenService.createAccessToken(existingUser.id);

        // tạo refresh token
        const refreshToken = this.tokenService.createRefreshToken(existingUser.id);

        return {
            accessToken,
            refreshToken,
            isTotp: null,
        };
    }

    async refreshToken(req: Request) {
        const { refreshToken, accessToken } = req.cookies;

        if (!refreshToken) {
            throw new UnauthorizedException(
                'Refresh token không tồn tại, vui lòng đăng nhập lại',
            );
        }

        if (!accessToken) {
            throw new UnauthorizedException(
                'Access token không tồn tại, vui lòng đăng nhập lại',
            );
        }

        const decodeAccessToken = this.tokenService.verifyAccessToken(accessToken, {
            ignoreExpiration: true,
        });

        const decodeRefreshToken =
            this.tokenService.verifyRefreshToken(refreshToken);

        if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
            throw new UnauthorizedException(
                'Token không hợp lệ, vui lòng đăng nhập lại',
            );
        }

        const userExist = await this.prisma.users.findUnique({
            where: {
                id: decodeAccessToken.userId,
            },
        });

        if (!userExist) {
            throw new UnauthorizedException(
                'Người dùng không tồn tại, vui lòng đăng nhập lại',
            );
        }

        const accessTokenNew = this.tokenService.createAccessToken(userExist.id);
        // const refreshTokenNew = signRefreshToken(payload);
        return {
            accessToken: accessTokenNew,
            refreshToken: refreshToken,
        };
    }
}
