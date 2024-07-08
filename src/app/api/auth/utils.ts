import { db } from "../../../../prisma/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
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
