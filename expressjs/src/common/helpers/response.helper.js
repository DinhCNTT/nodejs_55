export const responseSuccess = (data, message = "OK", statusCode = 200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data
    }
}

export const responseErr = (message = "Internal Server Error", statusCode = statusCodes.INTERNAL_SERVER_ERROR, stack) => {
    return {
        status: "error",
        statusCode: statusCode,
        message: message,
        //stack là nơi hiển thị chi tiết của lỗi, bao gồm các đường dẫn đến lỗi
        //Chỉ hiển thị trong môi trường Development
        //Không có trong môi trường Production
        stack: stack
    }

}