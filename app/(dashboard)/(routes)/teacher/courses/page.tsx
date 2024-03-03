import Link from "next/link";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
  return (  
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>
         Upload Past Paper
        </Button>

      </Link>
    </div>
  );
}
 
export default CoursePage;