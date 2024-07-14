import { ServerResponse } from "@/app/api/utils";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    isPrivate,
    userId,
    isFavourite,
    title,
    description,
    githubUrl,
    deployedUrl,
  } = body;

  try {
    const project = await prisma.project.create({
      data: {
        title,
        description,
        isFavourite,
        isPrivate,
        githubUrl,
        deployedUrl,
        ownerId: userId,
      },
    });

    if (!project) {
      return NextResponse.json(
        ServerResponse(
          null,
          false,
          "PROJECT CREATION FAILED",
          {
            title: "Project Creation Failed",
            description: "",
          },
          400
        )
      );
    } else {
      return NextResponse.json(
        ServerResponse(
          project,
          true,
          false,
          {
            title: "Project Created Successfully",
            description: "Project Created Successfully",
          },
          201
        )
      );
    }
  } catch (error) {
    return NextResponse.json(
      ServerResponse(
        null,
        false,
        "SERVER ERROR",
        {
          title: "Something went wrong with the server",
          description:
            "Something went wrong with the server, please try again later.",
        },
        500
      )
    );
  }
}
