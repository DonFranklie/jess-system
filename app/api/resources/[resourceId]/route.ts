import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: {params: { resourceId: string}}
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resource = await db.resource.findUnique({
      where: {
        id: params.resourceId,
        userId: userId,
      }
    })

    if(!resource) {
      return new NextResponse("Not found", {status: 404})
    }

    const deletedResource =  await db.resource.delete({
      where: {
        id: params.resourceId,
      }
    });

    return NextResponse.json(deletedResource);

  } catch (error) {
    console.log("[RESOURCE_ID_DELETE]", error);

    return new NextResponse("Internal Error", {status: 500})
  }
}

export async function PATCH(
  req: Request,
  { params }: {params: { resourceId: string}}
) {
  try {
    const { userId } = auth();
    const { resourceId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.resource.update({
      where:{
        id: resourceId,
        userId: userId
      },
      data: {
        ...values,
      }
    });

    return NextResponse.json(course);

  } catch (error) {
    console.log("[RESOURCES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}