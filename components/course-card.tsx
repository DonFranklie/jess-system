import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  department: string;
  college: string;

}


export const CourseCard = ({
  id,
  title,
  department,
  college
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">


    <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
          {title}
        </div>

        <p className="text-xs text-muted-foreground">
        <span>Department</span>: {department}
        </p>

        <p className="text-xs text-muted-foreground">
          <span>College</span>: {college}
        </p>
    </div>
      </div>
    </Link>
  )
}