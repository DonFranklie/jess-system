import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: {params: { filmId: string}}
) {
  try {
    const { userId } = auth();

    if (!userId || !isAdmin(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const video = await db.video.findUnique({
      where: {
        id: params.filmId,
        userId: userId,
      }
    })

    if(!video) {
      return new NextResponse("Not found", {status: 404})
    }

    const deletedVideo =  await db.video.delete({
      where: {
        id: params.filmId,
      }
    });

    return NextResponse.json(deletedVideo);

  } catch (error) {
    console.log("[VIDEO_ID_DELETE]", error);

    return new NextResponse("Internal Error", {status: 500})
  }
}

export async function PATCH(
  req: Request,
  { params }: {params: { filmId: string}}
) {
  try {
    const { userId } = auth();
    const { filmId } = params;
    const values = await req.json();

    if (!userId || !isAdmin(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const video = await db.video.update({
      where:{
        id: filmId,
        userId: userId
      },
      data: {
        ...values,
      }
    });

    return NextResponse.json(video);

  } catch (error) {
    console.log("[RESOURCES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}