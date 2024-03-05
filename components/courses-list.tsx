import { Course } from "@prisma/client";

type CourseWithProgressWithCategory = Course & {

}

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CourseList = ({
  items
}: CoursesListProps) => {
  return (
   <div>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.id}>
            {item.title}
        </div>
      ))}
    </div>
    {items.length === 0 && (
      <div className="text-center text-sm mt-10  text-muted-foreground">
        No Papers found
      </div>
    )}
   </div>
  )
}