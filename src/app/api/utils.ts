import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/options";

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

export async function getUserBySession({
  project = false,
}: {
  project?: boolean;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      projects: project,
    },
  });
  if (!user) {
    return null;
  }
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
