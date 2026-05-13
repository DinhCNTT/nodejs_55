import { Sequelize } from "sequelize";
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
//database: mysql; postgres; sql server; oracle
//user: tên đăng nhập vào database (root)
//pass: mật khẩu để đăng nhập vào database
//example.com - host: địa chỉ máy chủ của database (localhost || ip tới database)
//port: cổng kết nối đến database (3306)
//dbname: tên database

const sequelize = new Sequelize("mysql://root:2609Dinh@localhost:3306/practice_db");
//code test từ web sequelize để kiểm tra kết nối cơ sở dữ liệu
try {
    await sequelize.authenticate();
    console.log("[SEQUELIZE] Connection has been established successfully.");
} catch (error) {
    console.error("[SEQUELIZE] Unable to connect to the database:", error);
}

export default sequelize;


