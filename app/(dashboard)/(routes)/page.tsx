"use client"

import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {user} = useUser();
  return (

    <div className="m-4 p-8">
      {/* <UserButton 
        afterSignOutUrl="/"
      /> */}

      <h1 className="mb-8 text-2xl sm:text-2xl font-semibold text-slate-600">
        Welcome to JIESS, {user?.firstName} 
      </h1>

       
          <p className="p-6 bg-sky-200 w-{500px} rounded-lg border-4 border-sky-700 text-black ">
            The <span className="text-sky-900">JKUAT Integrated Educational Support System (JIESS)</span>  is a dynamic platform catering to diverse student learning needs at JKUAT. It offers essential resources, support, and tools for academic success, including past examination papers, interactive virtual learning, and a rich educational content repository. This innovative system blends education with innovation to provide a comprehensive and enriching learning experience, supporting academic pursuits at every step.
          </p>
      
          
          <div className="mt-8 flex flex-row flex-wrap gap-8">

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-xl sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Past Papers</h5>
               
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Access a vast repository of past examination papers to enhance your study and exam preparation in your academic journey at JKUAT.
                </p>
                <Link href="/past-papers">
                    <Button className="sm:text-sm">Access Past Papers <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </Button>
                    
                </Link>
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Learning Resources</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Explore a rich repository of educational content and resources to support your diverse learning and academic needs at JKUAT.
                </p>
                <Link href="/learning-resources" >
                <Button className="sm:text-sm"> Explore Learning Resources <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </Button>
                </Link>
             </div>

              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Learning Videos</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Access an extensive collection of educational videos to enhance your learning experience and understanding of various subjects.
                </p>

                <Link href="/learning-videos">
                    <Button className="sm:text-sm"> Explore Learning Videos <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </Button>
                </Link>
              </div>

          </div>


    </div>
    
  );
}
