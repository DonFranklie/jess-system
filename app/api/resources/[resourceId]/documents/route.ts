import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isAdmin } from "@/lib/admin";

export async function POST(
  req: Request,
  { params }: { params: { resourceId: string } }
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    if (!userId || !isAdmin(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resourceOwner = await db.resource.findUnique({
      where: {
        id: params.resourceId,
        userId: userId,
      }
    });

    if (!resourceOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const document = await db.document.create({
      data: {
        url,
        name: url.split("/").pop(),
        resourceId: params.resourceId,
      }
    });

    return NextResponse.json(document);
  } catch (error) {
    console.log("RESOURCE_ID_ATTACHMENTS", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}