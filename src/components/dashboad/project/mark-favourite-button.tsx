"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Loader2, Star } from "lucide-react";
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
  const [favourite, setFavourite] = useState(isFavourite);

  const handleFavourite = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/project/favourite", {
        projectId,
      });

      if (response.data.success) {
        setFavourite((prev) => !prev);
        if (response.data.data.isFavourite) {
          toast.success("Project marked as favourite");
        } else {
          toast.success("Project marked as not favourite");
        }
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
    <>
      <Button
        variant="ghost"
        onClick={handleFavourite}
        className="z-20 h-8 w-8 border"
        size="icon"
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <>
            <Star
              className={cn("", favourite ? "fill-primary stroke-primary" : "")}
              size={14}
            />
            <span className="sr-only">
              {favourite ? "Marked favourite" : "Marked not favourite"}
            </span>
          </>
        )}
      </Button>
    </>
  );
};

export default MarkFavouriteButton;
