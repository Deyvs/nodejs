const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controller/error");
const PORT = 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.page404);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
