import { getCourses } from "@/actions/get-papers";
import { CourseList } from "@/components/courses-list";
import { SearchInput } from "@/components/search-input";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    title: string;
  }
}

const PastPapers = async ({
  searchParams
}: SearchPageProps) => {
  const { userId } = auth();
  if(!userId) {
    return redirect("/")
  }


  const courses = await getCourses({
    userId,
    ...searchParams
  })

  return (
<>
<div className="px-6 pt-6 md:hidden md:mb-0 block">
  <SearchInput/>
</div>

<div className="p-6">
    <CourseList items={courses}/>
</div>
</>

  
  );

}

export default PastPapers;