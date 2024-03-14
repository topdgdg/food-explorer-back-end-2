require("express-async-errors");
require("dotenv/config");
const uploadConfig = require("./config/upload");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const AppError = require("./utils/AppError");
const express = require('express');
const routes = require("./routes");
const database = require("./database/sqlite");
app.use("/files, express.static (uploadConfig.UPLOADS_FOLDER");
app.use(routes);
database();

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
console.error(error);

return response.status.json({
    status: 501,
    message: "Erro interno do servidor",

});

});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server is running on Port:", PORT));