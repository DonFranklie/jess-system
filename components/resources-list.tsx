import { Document, Resource } from "@prisma/client";
import { CourseCard } from "@/components/course-card";
import { ResourceCard } from "./resource-card";

type ResourceWithDocuments = Resource & {
  documents: Document[]; // Assuming you have an Attachment type
}

interface ResourcesListProps {
  items: ResourceWithDocuments[];
}

export const ResourcesList = ({
  items
}: ResourcesListProps) => {
  return (
   <div>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <ResourceCard
          key={item.id}
          id={item.id}
          title={item.title}
          school={item.school!}
          author={item.author!}
          documents={item.documents} // Pass attachments to CourseCard
        />
      ))}
    </div>
    {items.length === 0 && (
      <div className="text-center text-sm mt-10  text-muted-foreground">
        No Resource found
      </div>
    )}
   </div>
  )
}
