import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const upsertData = await prisma.post.upsert({
    where: {
      id: 5,
    },
    update: {
      title: "title 2",
    },
    create: {
        title: "New Post",
        content: "This is a new post",
      },
  });
};

main();
