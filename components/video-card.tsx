import Link from "next/link";
import { Button } from "./ui/button";

interface VideoCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  url: string;
}


function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const VideoCard = ({
  id,
  title,
  author,
  url,
  description,
}: VideoCardProps) => {
  const titleInTitleCase = toTitleCase(title);
  

  return (
  
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {titleInTitleCase}
          </div>

          <p className="text-xs text-muted-foreground">{author}</p>

          <p className="text-xs text-muted-foreground">{description}</p>

          
      <Link href={url} download target="_blank">
                <Button className="mt-2">
                  Watch <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Button>
      </Link>  
        </div>
      </div>
  );
};
