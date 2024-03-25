import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { resourceId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resource = await db.resource.findUnique({
      where: {
        id: params.resourceId,
        userId,
      },
    });

    if (!resource) {
      return new NextResponse("Not found", { status: 404 });
    }

    const unpublishedResource = await db.resource.update({
      where: {
        id: params.resourceId,
        userId,
      },
      data: {
        isPublished: false,
      }
    });

    return NextResponse.json(unpublishedResource);
  } catch (error) {
    console.log("[RESOURCE_ID_UNPUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  } 
}