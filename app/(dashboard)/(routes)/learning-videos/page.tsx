import { getVideos } from "@/actions/get-videos";
import { VideoList } from "@/components/video-list";
import { VideoSearchInput } from "@/components/video-search-input";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface VideoPageProps {
  searchParams: {
    title: string;
  }
}

const LearningVideosPage = async ({
  searchParams
}: VideoPageProps) => {
  const { userId } = auth();
  if(!userId) {
    return redirect("/")
  }


  const videos = await getVideos({
    userId,
    ...searchParams
  })

  return (
   <>
   <div className="px-6 pt-6 md:hidden md:mb-0 block">
      <VideoSearchInput/>
    </div>
   
    <div className="p-6">
        <VideoList items={videos}/>
    </div>
   </>
  );

}

export default LearningVideosPage;