import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }
  return NextResponse.json({
    success: "User found",
    status: 200,
    data: session.user,
  });
}
