import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { resourceId: string, documentId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resourceOwner = await db.resource.findUnique({
      where: {
        id: params.resourceId,
        userId: userId
      }
    });

    if (!resourceOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const document = await db.document.delete({
      where: {
        resourceId: params.resourceId,
        id: params.documentId,
      }
    });

    return NextResponse.json(document);
  } catch (error) {
    console.log("DOCUMENT_ID", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

