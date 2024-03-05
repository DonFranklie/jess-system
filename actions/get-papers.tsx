import { Course } from "@prisma/client";

import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {

}

type GetCourses = {
  userId: string;
  title?: string;
};

export const getCourses =  async ({
  userId,
  title,
}: GetCourses): Promise<Course[]> => {
  try{
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return courses;

  } catch(error){
    console.log("[GET_PAPERS]", error);
    return [];
  }
}