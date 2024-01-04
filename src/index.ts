import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import routing from "./routing";

import Constants from "./shared/domain/serverConstants";
import connectDB from "./shared/infrastracture/connection";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

routing(app);

connectDB();

app.listen(Constants.PORT, () => {
  console.log(`Server is running on port ${Constants.PORT}`);
});
