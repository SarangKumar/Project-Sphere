import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { projectId, role, expiresAt } = body;

  console.log(body);

  return NextResponse.json({ message: "Success" });
}
