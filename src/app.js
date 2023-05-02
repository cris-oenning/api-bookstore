import express from "express";
import db from "./config/dbConnect.js";
import manipulative404 from "./middlewares/manipulative404.js";
import manipulativeErrors from "./middlewares/manipulativeErrors.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error."));
db.once("open", () => {
  console.log("Successful connection to the bank.");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulative404);

// eslint-disable-next-line no-unused-vars
app.use(manipulativeErrors);

export default app;