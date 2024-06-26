import { Course, Attachment, Category } from "@prisma/client";
import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
  attachments: Attachment[];
  category: Category | null;
};

type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
};

// Function to get attachments for a course
const getAttachmentsForCourse = async (courseId: string): Promise<Attachment[]> => {
  try {
    const attachments = await db.attachment.findMany({
      where: {
        courseId,
      },
    });

    return attachments;
  } catch (error) {
    console.log("[GET_ATTACHMENTS]", error);
    return [];
  }
};

export const getCourses = async ({ userId, title, categoryId }: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Attach attachments to each course
    const coursesWithAttachments = await Promise.all(
      courses.map(async (course) => {
        const attachments = await getAttachmentsForCourse(course.id);
        return {
          ...course,
          attachments,
        };
      })
    );

    return coursesWithAttachments;
  } catch (error) {
    console.log("[GET_PAPERS]", error);
    return [];
  }
};
