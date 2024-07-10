import { NextRequest, NextResponse } from "next/server";
import { ServerResponse } from "../../utils";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req: NextRequest) {
  const { name, email, password, confirmPassword } = await req.json();

  console.log(name, email, password, confirmPassword);
  try {
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        ServerResponse(
          null,
          false,
          "Please fill all fields",
          { title: "Error", description: "Please fill all fields" },
          400
        )
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        ServerResponse(
          null,
          false,
          "Passwords do not match",
          { title: "Error", description: "Passwords do not match" },
          400
        )
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        ServerResponse(
          null,
          false,
          "User already exists",
          { title: "Error", description: "User already exists" },
          400
        )
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS!)
    );

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      ServerResponse(
        user,
        true,
        null,
        {
          title: "Sign Up successful",
          description: "User created successfull, login to continue.",
        },
        201
      )
    );
  } catch (error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      return NextResponse.json(
        ServerResponse(
          null,
          false,
          "PrismaClientKnownRequestError",
          { title: "Error", description: "Prisma known error occured" },
          500
        )
      );
    }

    return NextResponse.json(
      ServerResponse(
        null,
        false,
        error.message,
        { title: "Error", description: error.message },
        500
      )
    );
  }
}
