// mongoose 안에 스키마 있음
const mongoose = require("mongoose");
const { Schema } = require("mongoose");
// 어떤 데이터 객체를 가져올때 Schema 라는 이름을 가진 객체만 데려와서 Schema에 할당하겠다..!
//const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  birthday: Number,
});

const Sample = mongoose.model("Sample", sampleSchema);
// 스키마로 만든 것을 객체로 구현하기 위한 것이 몽구스에 있는 model임
// 여기서는 Sample이라는 이름으로 객체를 만드는 것
