import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors(
  // { origin: "http://localhost:3000",}
  ));
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT, () => {
  console.log("Server started on port 3333")
});