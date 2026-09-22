const express = require("express");

const app = express();
const connectDB = require("./database/db")

const userRoute = require("./routes/blogRoute");
connectDB();

app.use(express.json());
app.use("/users", userRoute);

app.listen(3000, () => {
    console.log("server chal gya oyy")
})