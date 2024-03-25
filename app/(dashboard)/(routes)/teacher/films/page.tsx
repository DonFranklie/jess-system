import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const VideosPage = async () => {
  const { userId } = auth();

if (!userId) {
  return redirect("/");
}

const videos = await db.video.findMany({
  where: {
    userId,
  },
  orderBy: {
    createdAt: "desc"
  }
})

  return (
      <div className="p-6">
     <DataTable columns={columns} data={videos} />
     
    </div>
      
  )
}

export default VideosPage;