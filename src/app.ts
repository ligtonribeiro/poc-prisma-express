import { PrismaClient } from "@prisma/client";
import * as express from "express";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post("/create-user", async (req: Request, res: Response) => {
  const { email, name, phone } = req.body;
  const formatDate = new Date(req.body.birth_date);

  const createUser = await prisma.user.create({
    data: {
      email,
      name,
      phone,
      birth_date: formatDate,
    },
  });
  res.json(createUser).status(201);
});
app.listen(3000, () =>
  console.log(`🚀 Server is running at: http://localhost:3000`)
);
