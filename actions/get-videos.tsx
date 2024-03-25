import { Video } from "@prisma/client";
import { db } from "@/lib/db";

type GetVideos = {
  userId: string;
  title?: string;
};

export const getVideos = async ({ userId, title }: GetVideos): Promise<Video[]> => {
  try {
    const videos = await db.video.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return videos;
  } catch (error) {
    console.log("[GET_VIDEOS]", error);
    return [];
  }
};
