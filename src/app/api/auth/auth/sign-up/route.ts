import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail, ServerResponse } from "../../utils";
import { signIn, signOut } from "@/auth";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  const rawData = {
    email,
    password,
    name: name,
    redirectTo: "/", // Redirect to home page after successful login
  };

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return NextResponse.json(
      ServerResponse(
        existingUser,
        false,
        "User already exists",
        {
          title: "User already exists",
          description: "User with this email already exists",
        },
        400
      )
      //   { status: 400 }
    );
  }

  // Create a new user
  // TODO
  try {
    const cred = await signIn("credentials", rawData);
    console.log(cred);
  } catch (error: any) {
    return NextResponse.json(
      ServerResponse(
        null,
        false,
        "Error creating user",
        {
          title: "Error creating user",
          description: "Error creating user",
        },
        400
      )
      //   { status: 400 }
    );
  }

  return NextResponse.json(existingUser);
}
