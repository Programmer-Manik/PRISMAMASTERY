import { PrismaClient } from "@prisma/client";
import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {
  //    const singleUpdate = await prisma.post.update({
  //     where:{
  //         id:1
  //     },
  //     data:{
  //         title: "updated title",
  //         content: "updated content",
  //         author: "updated author",
  //     }
  //    })
  //    console.log("Single update result:", singleUpdate);

  const updatedMany = await prisma.post.updateMany({
    where: {
      title:'title 2'
    },
    data: {
      published: true 
    },
  });
  console.log("updatemany", updatedMany);


};

main();
