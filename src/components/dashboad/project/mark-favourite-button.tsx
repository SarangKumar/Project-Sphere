"use client";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Loader2, Star } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const MarkFavouriteButton = ({
  projectId,
  isFavourite,
}: {
  projectId: string;
  isFavourite: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFavourite = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/project/favourite", {
        projectId,
      });

      if (response.data.success) {
        if (response.data.data.isFavourite) {
          toast.success("Project marked as favourite");
        } else {
          toast.success("Project marked as not favourite");
        }
        router.refresh();
      } else {
        toast.error("Failed to mark project as favourite");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      variant="ghost"
      onClick={handleFavourite}
      className="border"
      size="icon"
    >
      {loading ? (
        <Loader2 size={14} className="animate-spin" />
      ) : (
        <>
          <Star
            className={cn("", isFavourite ? "fill-primary stroke-primary" : "")}
            size={14}
          />
          <span className="sr-only">
            {isFavourite ? "Marked favourite" : "Marked not favourite"}
          </span>
        </>
      )}
    </Button>
  );
};

export default MarkFavouriteButton;
