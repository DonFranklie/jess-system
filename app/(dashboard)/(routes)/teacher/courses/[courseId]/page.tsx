import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard, File } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { UnitCodeForm } from "./_components/unitcode-form";
import { CourseNameForm } from "./_components/coursename-form";
import { DepartmentNameForm } from "./_components/departmentname-form";
import { SchoolNameForm } from "./_components/school-form";
import { CollegeNameForm } from "./_components/college-form";
import { AttachmentForm } from "./_components/attachment-form";
import { PastPaperForm } from "./_components/paper-form";

const CourseIdPage = async ({
  params
}: {
  params: {courseId: string}
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique
  (
    {
      where: {
        id: params.courseId
      },
      include: {
        attachments: {
          orderBy: {
            createdAt: "desc",
          }
        }
      }
    }
  );

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.unitCode,
    course.course,
    course.department,
    course.school,
    course.college,
    course.description,
    course.Url,
    // course.categoryId,
    // course.chapters.some(chapter => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;


  return (  
    <div className="p-6">

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">
              Past Paper setup
            </h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>

        </div>

      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard}/>
              <h2 className="text-xl">
                  Details of this Past Paper
              </h2>

            </div>

            <TitleForm
              initialData={course}
              courseId={course.id}
            />

            <DescriptionForm
              initialData={course}
              courseId={course.id}
            />

            <UnitCodeForm
              initialData={course}
              courseId={course.id}
            />

            <CourseNameForm
              initialData={course}
              courseId={course.id}
            />

          </div>

          <div>
          <DepartmentNameForm
              initialData={course}
              courseId={course.id}
            />

            <SchoolNameForm
              initialData={course}
              courseId={course.id}
            />

            <CollegeNameForm
              initialData={course}
              courseId={course.id}
            />

             
              <AttachmentForm
                initialData={course}
                courseId={course.id}
              />
            </div>
      </div>
    </div>
  );
}
 
export default CourseIdPage;