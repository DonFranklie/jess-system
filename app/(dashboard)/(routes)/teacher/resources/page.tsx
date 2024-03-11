import { Button } from "@/components/ui/button";
import Link from "next/link";

const ResourcesPage = () => {
  return ( 
    <div className="p-6">
     <Link href="/teacher/add">
     <Button>
      New Resource
     </Button>
     </Link>
    </div>
   );
}
 
export default ResourcesPage;