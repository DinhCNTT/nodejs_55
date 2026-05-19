import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../common/squelize/connect.sequelize.js";

const Article = sequelize.define(
    "Article", //tên modal sẽ sử dụng cục bộ trong Sequelize, không phải tên bảng trong database
    {
        //định nghĩa các trường của bảng article
        id: {
            //định nghĩa các thông tin trong cột ID
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users', // Tên bảng (hoặc tên model) mà foreign key trỏ tới
                key: 'id'
            }
        },
        deletedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN, // tinyint(1) trong MySQL thường map với BOOLEAN trong Sequelize
            allowNull: false,
            defaultValue: false, // false tương đương với 0
        },
        deletedAt: {
            type: "TIMESTAMP",
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        }
    },
    {
        timestamps: false,
        tableName: "articles", //tên bảng trong database, nếu không có trường này, Sequelize sẽ tự động chuyển tên modal thành chữ thường và thêm "s" vào cuối để làm tên bảng (ví dụ: Article -> articles)
    },
);

// Đồng bộ model với database (tạo bảng nếu chưa có, cập nhật nếu có thay đổi)
Article.sync({ alter: true });

export default Article;
