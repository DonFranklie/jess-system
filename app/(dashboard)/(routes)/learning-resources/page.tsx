import { getResources } from "@/actions/get-resources";
import { ResourceSearchInput } from "@/components/resource-search-input";
import { ResourcesList } from "@/components/resources-list";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ResourcePageProps {
  searchParams: {
    title: string;
  }
}

const LearningResourcesPage = async ({
  searchParams
}: ResourcePageProps) => {
  const { userId } = auth();
  if(!userId) {
    return redirect("/")
  }


  const resources = await getResources({
    userId,
    ...searchParams
  })

  return (
    <>
    <div className="px-6 pt-6 md:hidden md:mb-0 block">
      <ResourceSearchInput/>
    </div>
    
    <div className="p-6">
        <ResourcesList items={resources}/>
    </div>
    </>
  );

}

export default LearningResourcesPage;