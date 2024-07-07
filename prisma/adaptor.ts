// import { Adapter } from "next-auth/adapters";
// import { PrismaClient } from "@prisma/client";
// import { ObjectId } from "bson";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

// export const CustomPrismaAdapter = (prisma: PrismaClient): Adapter => {
//   const adapter = PrismaAdapter(prisma);

//   return {
//     ...adapter,
//     createUser: async (data) => {
//       data.id = new ObjectId().toString();
//       return adapter.createUser(data);
//     },
//     // Customize other methods if needed
//   };
// };
