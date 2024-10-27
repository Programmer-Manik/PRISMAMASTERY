import { PrismaClient } from "@prisma/client";
import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "post 1",
        content: "content 1",
        author: "author 1",
      },
      {
        title: "post 2",
        content: "content 2",
        author: "author 2",
      },
      {
        title: "post 3",
        content: "content 3",
        author: "author 3",
      },
      {
        title: "post 4",
        content: "content 4",
        author: "author 4",
      },
      {
        title: "post 5",
        content: "content 5",
        author: "author 5",
      },
    ],
  });
console.log(createMany)


};

main();
