import { ServerResponse } from "@/app/api/utils";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { projectId } = await req.json();

  const projectExists = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!projectExists) {
    return NextResponse.json(
      ServerResponse(
        null,
        false,
        "PROJECT NOT FOUND",
        {
          title: "Project not found",
          description:
            "The project you are trying to mark as favourite does not exist",
        },
        400
      )
    );
  }

  const project = await prisma.project.update({
    where: { id: projectId },
    data: { isFavourite: !projectExists.isFavourite },
  });

  return NextResponse.json(
    ServerResponse(
      project,
      true,
      "PROJECT MARKED AS FAVOURITE",
      {
        title: "Project marked as favourite",
        description: "The project has been successfully marked as favourite",
      },
      200
    )
  );
}
