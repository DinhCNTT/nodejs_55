//service: xử lý logic nghiệp vụ, tương tác với database, sau đó trả về kết quả cho controller
import sequelize from "../common/squelize/connect.sequelize.js";
import Article from "../models/article.model.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const articleService = {
    async findAll(req) {
        //xử lý phân trang
        //ví dụ: 10 bài viết trên 1 trang
        //page = 1: từ 0-9
        //page = 2: từ 10-19
        //page = n: từ (n-1)*10 - n*10
        let { page, pageSize } = req.query;
        //xử lý chuyển về số nguyên
        page = Number(page) || 1;
        pageSize = Number(pageSize) || 3;
        //xử lý trường hợp số âm
        if (page < 1) page = 1;
        if (pageSize < 1) pageSize = 3;
        //index: vị trí bắt đầu lấy dữ liệu
        const index = (page - 1) * pageSize;
        //prisma
        //thay vì viết raw sql thì sử dụng hàm có sẵn của prisma để có thể phân trang
        const res = await prisma.articles.findMany({
            // tìm tất cả bài viết mà chưa bị xóa (isDeleted = false)
            where: {
                isDeleted: false,
            },
            skip: index, // tương đương với offset trong sql
            take: pageSize, // tương đương với limit trong sql
        });
        //thông qua .count để đếm số lượng bài viết và điều kiện chưa bị xóa
        const totalItems = await prisma.articles.count({
            where: {
                isDeleted: false,
            },
        });
        //tổng số trang = tổng số bài viết / số bài viết trên 1 trang (làm tròn lên)
        const totalPages = Math.ceil(totalItems / pageSize);

        return {
            items: res,
            totalItems: totalItems,
            totalPages: totalPages,
            page: page,
            pageSize: pageSize,
        };
    },
    async create(req) {
        const body = req.body;
        console.log({ body });
        const res = await prisma.articles.create({
            data: {
                title: body.title,
                content: body.content,
                userId: body.userId,
            },
        })
        return true;
    },
    async update(req) {
        const { articleId } = req.params;
        console.log(articleId);//string
        const body = req.body;
        console.log(body);
        const res = await prisma.articles.update({
            where: {
                id: Number(articleId), //chuyển string -> number
            },
            data: {
                title: body.title,
                content: body.content,
                // userId: body.userId,
            },
        })
        return true;
    },
    async delete(req) {
        const { articleId } = req.params;

        //delete thật trong db (không sử dụng để bảo toàn dữ liệu)
        // const res = await prisma.articles.delete({
        //     where: {
        //         id: Number(articleId), //chuyển string -> number
        //     },
        // })

        // soft delete
        const res = await prisma.articles.update({
            where: {
                id: Number(articleId), //chuyển string -> number
            },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
                deletedBy: 1,
            },
        })
        return true;
    },

};





