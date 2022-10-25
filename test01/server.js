const express = require("express");
const mongoose = require("mongoose");
const sampleRouter = require("./routes/sampleRouter");
// import 해준다.
// node_modules안의 파일에서 불러온다는 의미임...!

// DB 연결
const app = express(); // express 객체 생성

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://localhost:27017/sample")
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch((e) => console.error(e)); // mongoDB와 연결 -> connect까지만 하면 연결만 됨. 오류처리는 안됨.

app.use("/sample", sampleRouter); // sample 경로로 가면 sampleRouter에서 처리해주겠다.

app.listen(8080); // 포트에 연결

module.exports = app;
