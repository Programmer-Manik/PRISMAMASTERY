import { PrismaClient } from "@prisma/client";
// import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {
//findMany
//   const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);


  //find first  
//   const findFirst = await prisma.post.findFirst({
//     where: {
//       id: 1,
//     },
//   });

  //findfirstOrThro
//   const findFirst = await prisma.post.findFirstOrThrow({
//     where: {
//       published: true,
//     },
//   });
//   console.log({ findFirst });



// findUnique 
// const findUnique = await prisma.post.findUnique({
//     where: {
//       id: 1,
//     },
  
// });
//   console.log({ findUnique });


// findUniqueOrThrow query
// const findUnique = await prisma.post.findUniqueOrThrow({
//     where: {
//       id: 20,
//     },
  
// });
// console.log({findUnique})







};

main();
