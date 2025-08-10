import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello Express");
});

const jokes = [
  {
    id: 1,
    name: "first joke",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est perspiciatis corporis at, assumenda fugiat quibusdam blanditiis aperiam. Dolor corporis magni sequi est placeat veniam eaque labore expedita temporibus, odit soluta?",
  },
  {
    id: 2,
    name: "second joke",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est perspiciatis corporis at, assumenda fugiat quibusdam blanditiis aperiam. Dolor corporis magni sequi est placeat veniam eaque labore expedita temporibus, odit soluta?",
  },
  {
    id: 3,
    name: "third joke",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est perspiciatis corporis at, assumenda fugiat quibusdam blanditiis aperiam. Dolor corporis magni sequi est placeat veniam eaque labore expedita temporibus, odit soluta?",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`APP IS RUNNING AT PORT ${port}`);
});
