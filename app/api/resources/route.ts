import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isAdmin } from "@/lib/admin";

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId || !isAdmin(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const resource = await db.resource.create({
      data: {
        userId,
        title,
      }
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.log("[RESOURCES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}