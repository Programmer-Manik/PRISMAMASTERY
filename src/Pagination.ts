import { PrismaClient } from "@prisma/client";
import { Console } from "console";

const prisma = new PrismaClient();

const main = async () => {
 
    // const offsetData  = await prisma.post.findMany({
    //     skip:40,
    //     take:3,
    
    // })
    // console.log("offest paginated data",offsetData)


    // const cursorData  = await prisma.post.findMany({
    //     skip:28,
    //     take:3,
    //     cursor:{
    //         id:30
    //     }
    
    // })
    // console.log("offest paginated data",cursorData)



    const SortingData  = await prisma.post.findMany({
          orderBy:{
            title: "asc"
            // title:"desc"
          }
        
        })
        console.log("offest paginated data",SortingData)

}

main();