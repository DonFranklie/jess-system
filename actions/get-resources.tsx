import { Resource, Document } from "@prisma/client";
import { db } from "@/lib/db";

type ResourceWithAttachments = Resource & {
  documents: Document[];
};

type GetResources = {
  userId: string;
  title?: string;
};

// Function to get attachments for a Resource
const getAttachmentsForResource = async (resourceId: string): Promise<Document[]> => {
  try {
    const documents = await db.document.findMany({
      where: {
        resourceId,
      },
    });

    return documents;
  } catch (error) {
    console.log("[GET_DOCUMENTS]", error);
    return [];
  }
};

export const getResources = async ({ userId, title }: GetResources): Promise<ResourceWithAttachments[]> => {
  try {
    const resources = await db.resource.findMany({
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

    // Attach attachments to each Resource
    const resourcesWithAttachments = await Promise.all(
      resources.map(async (resource) => {
        const documents = await getAttachmentsForResource(resource.id);
        return {
          ...resource,
          documents,
        };
      })
    );

    return resourcesWithAttachments;
  } catch (error) {
    console.log("[GET_RESOURCES]", error);
    return [];
  }
};
