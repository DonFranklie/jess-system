import { isAdmin } from "@/lib/admin";
import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
 
const handleAuth = () => {
  const { userId } = auth();
  const isAuthorized = isAdmin(userId);

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
}

  export const ourFileRouter = {
    resourceImage: f({ image: { maxFileSize: "8MB", maxFileCount: 1 }})
      .middleware(() => handleAuth())
      .onUploadComplete(() => {}),
    courseAttachment: f(["pdf"])
      .middleware(() => handleAuth())
      .onUploadComplete(() => {}),
      resourceAttachment: f(["pdf"])
      .middleware(() => handleAuth())
      .onUploadComplete(() => {}),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
      .middleware(() => handleAuth())
      .onUploadComplete(() => {})
  } satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;