import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  department: string;
  college: string;
}

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const CourseCard = ({
  id,
  title,
  department,
  college
}: CourseCardProps) => {
  const titleInTitleCase = toTitleCase(title);

  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {titleInTitleCase}
          </div>

          <p className="text-xs text-muted-foreground">{department}</p>

          <p className="text-xs text-muted-foreground">{college}</p>
        </div>
      </div>
    </Link>
  );
};
