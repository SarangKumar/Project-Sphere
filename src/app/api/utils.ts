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
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (!user) return null;

  const isPasswordValid = await compare(password, user.email);

  if (!isPasswordValid) return null;

  return user;
}
