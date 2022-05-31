const express = require("express");
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

let Hobbies = [];

//Home route
app.get("/", (req, res) => {
  res.render("index", {
    Hobbies: Hobbies,
  });
});

//contact route
app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const hobby = req.body.hobby;
  console.log(hobby);
  hobby && Hobbies.push(hobby);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is ruiing at http://localhost:${PORT}`);
});
