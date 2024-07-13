import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

// export async function getUserById(userId: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });
//     if (!user) {
//       throw new Error("User not found");
//     }
//     return user;
//   } catch (error) {
//     console.error("Error retrieving user:", error);
//     throw error;
//   }
// }

export async function getUserById(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

export function ServerResponse(
  data: any,
  success: boolean,
  error: any,
  message: { title: string; description: string },
  status: number
) {
  return {
    data,
    success,
    error,
    message,
    status,
  };
}

export async function loginWithEmail(email?: string, password?: string) {
  if (!email || !password) {
    return null;
    // return ServerResponse(null, false, "Please provide email and password", { title: "Error", description: "Please provide email and password" }, 400);
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (!user) return null;
  //  ServerResponse(null, false, "User not found", { title: "Error", description: "User not found" }, 404);

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) return null;
  // ServerResponse(null, false, "Invalid password", { title: "Error", description: "Invalid password" }, 401);

  return user;
  // ServerResponse(user, true, null, { title: "Login successful", description: "User logged in successfully" }, 200);
}
