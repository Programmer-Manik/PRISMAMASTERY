import { PrismaClient } from "@prisma/client";
import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {
//  const result = await prisma.post.create({
//     data: {
//     title: "First Post",
//     content: "This is the first post",
//     author:"this is manik "
//     }
//  })   
//  console.log(result)
 

const getAllFromDB = await prisma.post.findMany();
console.log(getAllFromDB);
}

main();