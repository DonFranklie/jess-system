import { Video } from "@prisma/client";
import Link from "next/link";
import { VideoCard } from "./video-card";

type VideoWithProgressWithCategory = Video & {
  author: string | null;
  Url: string | null;
};

interface VideosListProps {
  items: VideoWithProgressWithCategory[];
}

export const VideoList = ({ items }: VideosListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <VideoCard
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author || ""} // Use an empty string as default if author is null
            url={item.Url || ""} // Use an empty string as default if URL is null
            description={item.description || ""}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm mt-10 text-muted-foreground">
          No Videos found.{" "}
          <Link href="/request" className="text-sky-500">
            Request for a Video
          </Link>
        </div>
      )}
    </div>
  );
};
