const path = require("path");
const express = require("express");
const { connectDb } = require("./src/db");
const indexRoutes = require("./src/routes");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

const PORT = process.env.PORT || 3000;

connectDb();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
