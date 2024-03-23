import { getCourses } from "@/actions/get-papers";
import { CourseList } from "@/components/courses-list";
import { SearchInput } from "@/components/search-input";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Categories } from "./_components/categories";

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
  });

  const categories =  await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  return (
<>
<div className="px-6 pt-6 md:hidden md:mb-0 block">
  <SearchInput/>
</div>

<div className="p-6">
  <Categories
    items={categories}
  />
    <div className="mt-4">
    <CourseList items={courses}/>
    </div>
</div>
</>

  
  );

}

export default PastPapers;