const { Router } = require("express");
const { Sample } = require("../schemas/sample");

const router = Router();

// read 데이터를 조회하는 기능
router.get("/", async (req, res) => {
  const samples = await Sample.find({});
  res.send(samples);
});

// create 데이터를 생성하는 기능
// 데아터 넣을 url ~/sample/add?name=amy&age=10
router.use("/add", async (req, res) => {
  const { name, age } = req.query;
  const sample = await Sample.create({ name, age });
  res.send(sample);
});

module.exports = router;
