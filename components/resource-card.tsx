import Link from "next/link";
import { Button } from "./ui/button";

interface ResourceCardProps {
  id: string;
  title: string;
  author: string;
  school: string;
  documents: Document[]; // Assuming you have an Attachment type
}

interface Document {
  id: string;
  name: string;
  url: string;
  // Add any other properties that represent an attachment
}


function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const ResourceCard = ({
  id,
  title,
  author,
  school,
  documents,
}: ResourceCardProps) => {
  const titleInTitleCase = toTitleCase(title);

  // Get the URL of the first attachment, or an empty string if no attachments
  const downloadUrl = documents.length > 0 ? documents[0].url : "";

  return (
  
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {titleInTitleCase}
          </div>

          <p className="text-xs text-muted-foreground">{author}</p>

          <p className="text-xs text-muted-foreground">{school}</p>

          {documents.length > 0 && (
<Link href={downloadUrl} download target="_blank">
<Button className="mt-2">
            Download
          </Button>
</Link>
       )}     
        </div>
      </div>
  );
};
