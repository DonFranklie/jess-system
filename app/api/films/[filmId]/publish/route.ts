import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { filmId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const video = await db.video.findUnique({
      where: {
        id: params.filmId,
        userId,
      },
    });

    if (!video) {
      return new NextResponse("Not found", { status: 404 });
    }


    if (!video.title || !video.description || !video.author|| !video.Url) {
      return new NextResponse("Missing required fields", { status: 401 });
    }

    const publishedVideo = await db.video.update({
      where: {
        id: params.filmId,
        userId,
      },
      data: {
        isPublished: true,
      }
    });

    return NextResponse.json(publishedVideo);
  } catch (error) {
    console.log("[VIDEO_ID_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  } 
}