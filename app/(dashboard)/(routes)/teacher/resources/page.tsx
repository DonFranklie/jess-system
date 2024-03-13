import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const ResourcesPage = async () => {
  const { userId } = auth();

if (!userId) {
  return redirect("/");
}

const courses = await db.resource.findMany({
  where: {
    userId,
  },
  orderBy: {
    createdAt: "desc"
  }
})

  return ( 
    <div className="p-6">
     <DataTable columns={columns} data={courses} />
    </div>
   );
}
 
export default ResourcesPage;