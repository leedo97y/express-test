const express = require("express");
const mongoose = require("mongoose");
// import 해준다.
// node_modules안의 파일에서 불러온다는 의미임...!

// DB 연결
const app = express(); // express 객체 생성

mongoose
  .connect("mongodb://localhost:27017/sample")
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch((e) => console.error(e)); // mongoDB와 연결 -> connect까지만 하면 연결만 됨. 오류처리는 안됨.

app.listen(8080); // 포트에 연결
