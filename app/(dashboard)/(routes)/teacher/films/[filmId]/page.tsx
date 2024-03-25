import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard, Link } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { AuthorForm } from "./_components/author-form";
import { VideoUrlForm } from "./_components/video-url-form";
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";



const FilmIdPage = async ({
  params
}: {
  params: {filmId: string}
}) => {
  const { userId } = auth();

  if(!userId){
    return redirect("/");
  }



  const video = await db.video.findUnique
    (
      {
        where: {
          id: params.filmId
        },
      }
    );


  if(!video){
    return redirect("/");
  }

  const requiredFields = [
    video.title,
    video.author,
    video.description,
    video.Url,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(field => field !== undefined && field !== null);


  return (
    <>
    {!video.isPublished && (
      <Banner
        label="This Video Link is unpublished. It will not be visible to students"
      />
    )}



    <div className="p-6">
       <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">
                Video Setup
              </h1>
              <span className="text-sm text-slate-700">
                Complete all fields {completionText}
              </span>

          </div>
          {/* Add Actions */}
          <Actions
            disabled={!isComplete}
            filmId={params.filmId}
            isPublished={video.isPublished}
          
          />
        </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

              <div>
                <div className="flex items-center gap-x-2">
                  <IconBadge icon={LayoutDashboard}/>
                  <h2 className="text-xl">
                      Details of this Video
                  </h2>

                </div>

                <TitleForm
                initialData={video}
                filmId={video.id}
                />
                <DescriptionForm
                initialData={video}
                filmId={video.id}
                />

                <AuthorForm
                initialData={video}
                filmId={video.id}
                />

              </div>
                    <div>
                <div className="flex items-center gap-x-2">
                  <IconBadge icon={Link}/>
                  <h2 className="text-lg">Video Link</h2>
                </div>
                <VideoUrlForm
                initialData={video}
                filmId={video.id}
                />
                
              </div>
          </div>
    </div>
    </>
  );
}

export default FilmIdPage;