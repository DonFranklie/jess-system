import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { File, LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { AuthorForm } from "./_components/author-form";
import { DocumentForm } from "./_components/document-form";
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";


const ResourceIdPage = async ({
  params
}: {
  params: { resourceId: string}
}) => {
  const { userId } = auth();

  if(!userId){
    return redirect("/");
  }



  const resource = await db.resource.findUnique
    (
      {
        where: {
          id: params.resourceId
        },
        include: {
          documents: {
            orderBy: {
              createdAt: "desc",
            }
          }
        }
      }
    );

  if(!resource){
    return redirect("/");
  }

  const requiredFields = [
    resource.title,
    resource.author,
    resource.description,
    resource.documents,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(field => field !== undefined && field !== null);
  

  return ( 
    <>
    {!resource.isPublished && (
      <Banner
        label="This resource is unpublished. It will not be visible to students"
      />
    )}


    <div className="p-6">
     <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">
              Resource Setup
            </h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>

        </div>
        {/* Add Actions */}
        <Actions
          disabled={!isComplete}
          resourceId={params.resourceId}
          isPublished={resource.isPublished}
        
        />
     </div>
      
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
     <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard}/>
              <h2 className="text-xl">
                  Details of this Resource
              </h2>

            </div>

            <TitleForm
            initialData={resource}
            resourceId={resource.id}
            />
             <DescriptionForm
            initialData={resource}
            resourceId={resource.id}
            />

            <AuthorForm
            initialData={resource}
            resourceId={resource.id}
            />

           

     </div>
     {/* <ImageForm
            initialData={resource}
            resourceId={resource.id}
            /> */}
        <div>
           <div className="flex items-center gap-x-2">
            <IconBadge icon={File}/>
            <h2 className="text-lg">Resource</h2>
           </div>
           
           
           <DocumentForm
            initialData={resource}
            resourceId={resource.id}
            />
        </div>
          
    </div>
    </div>
    </>
   );
}
 
export default ResourceIdPage;