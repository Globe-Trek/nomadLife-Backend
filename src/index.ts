import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import routing from "./routing";

import connectDB from "@shared/infrastructure/infrastructure";
import Constants from "@shared/domain/serverConstants";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

routing(app);

connectDB();

app.listen(Constants.PORT, () => {
  console.log(`Server is running on port ${Constants.PORT}`);
});
