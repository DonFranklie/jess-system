"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import Link from "next/link";

import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input";
import { ResourceSearchInput } from "./resource-search-input";
import { isAdmin } from "@/lib/admin";

export const NavbarRoutes = () => {
  const pathname = usePathname(); 
  const { userId } = useAuth(); 
 

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/past-papers"
  const isResourcePage = pathname === "/learning-resources"
  const isRequestPage = pathname === "/request"



  return (
    <>
    {isSearchPage  && (
      <div className="hidden md:block">
        <SearchInput />
      </div>
    )}
    {isResourcePage  && (
      <div className="hidden md:block">
        <ResourceSearchInput />
      </div>
    )}
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
          <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : isAdmin(userId) ? (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Admin mode
          </Button>
        </Link>
      ): null}

      <UserButton
         afterSignOutUrl="/"
      />
    </div>
    </>
    )
  
}

