import { PrismaClient } from "@prisma/client";
import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {

// delete single
//   const singleDelete = prisma.post.delete({
//     where: {
//       id: 1,
//     },
//   });
//   console.log(singleDelete);



// delete many 
// const ManyDelete = prisma.post.deleteMany({
//         where: {
//          published: false,
//         },
//       });
//       console.log(ManyDelete);



// all deleteAll 
// const deleteAll = prisma.post.deleteMany({})

}

main();
