"use client";

import { BarChart, Book, File, Film,  Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: File,
    label: "Past Papers",
    href: "/past-papers"
  },
  {
    icon: Book,
    label: "Learning Resources",
    href: "/learning-resources"
  },
  {
    icon: Film,
    label: "Learning Videos",
    href: "/learning-videos"
  },


]

const teacherRoutes = [
  {
    icon: List,
    label: "Papers",
    href: "/teacher/courses",
  },
  {
    icon: Book,
    label: "Resources",
    href:"/teacher/resources"
  },
  {
    icon: Film,
    label: "Videos",
    href: "/teacher/films"
  },
  // {
  //   icon: BarChart,
  //   label: "Analytics",
  //   href: "/teacher/analytics",
  // },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
     {routes.map((route) => (
         <SidebarItem
         key={route.href}
         icon={route.icon}
         label={route.label}
         href={route.href}
       />
     ))}
    </div>
  )
}