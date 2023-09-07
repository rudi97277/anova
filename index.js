const express = require("express");
const anova = require("ml-anova");
const app = express();
const { urlencoded, json } = require("body-parser");

app.use(urlencoded({ extended: false }));
app.use(json());

app.all("/", (req, res) => {
  const data = req.body.data;
  const classes = req.body.classes;
  const result = anova.oneWay(data, classes, { alpha: 0.05 });
  res.json(result);
});
app.listen(process.env.PORT || 3000);
