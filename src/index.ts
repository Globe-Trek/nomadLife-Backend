import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello world");
  res.statusCode = 200;
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
