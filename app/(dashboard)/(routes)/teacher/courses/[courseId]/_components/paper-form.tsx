"use client";

import * as z from "zod";
import axios from "axios";
import { Pencil, PlusCircle, ImageIcon, FileIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface PastPaperFormProps {
  initialData: Course
  courseId: string;
};

const formSchema = z.object({
  Url: z.string().min(1, {
    message: "Past Paper is required",
  }),
});

export const PastPaperForm = ({
  initialData,
  courseId
}: PastPaperFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Past Paper attached");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Past Paper Document
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.Url && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add the Paper
            </>
          )}
          {!isEditing && initialData.Url && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Paper
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.Url ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="courseImage"
              fill
              className="object-cover rounded-md"
              src={initialData.Url}
            />
          </div>
        )
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="pastPaper"
            onChange={(url) => {
              if (url) {
                onSubmit({ Url: url });
              }
            }}
          />
        </div>
      )}
    </div>
  )
}