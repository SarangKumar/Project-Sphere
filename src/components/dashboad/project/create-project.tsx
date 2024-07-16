"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { createProjectSchema } from "@/types/schema";
import SubmitButton from "@/components/auth/submit-button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Tag, TagInput } from "emblor";

export function CreateProject({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof createProjectSchema>>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      title: "",
      isPrivate: true,
      isFavourite: false,
      topics: [],
    },
  });

  const [tags, setTags] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const { setValue } = form;

  async function onSubmit(values: z.infer<typeof createProjectSchema>) {
    setLoading(true);
    console.log(values);
    try {
      const response = await axios.post("/api/v1/project/create", {
        ...values,
        userId,
      });
      if (response.data.success) {
        toast.success(response.data.message.title);
        router.push("/dashboard");
        revalidatePath("/dashboard");
      } else {
        toast.error(response.data.message.title);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mb-20 max-w-screen-md space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                This is your public project name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  className="h-48"
                  disabled={loading}
                  placeholder="Description"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a detailed description of your project. It should be
                atleast 16 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deployedUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deployed URL</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  type="url"
                  placeholder="https://www.example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide the URL where your project is deployed. This will allow
                others to view the live version of your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github URL</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  disabled={loading}
                  placeholder="https://github.com/username/reponame"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide the GitHub repository URL for your project. This will
                allow others to view the source code.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="topics"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="text-left">Topics</FormLabel>
              <FormControl className="w-full">
                <TagInput
                  {...field}
                  placeholder="Enter a topic"
                  tags={tags}
                  className="sm:min-w-[450px]"
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue("topics", newTags as [Tag, ...Tag[]]);
                  }}
                  activeTagIndex={activeTagIndex}
                  setActiveTagIndex={setActiveTagIndex}
                />
              </FormControl>
              <FormDescription className="text-left">
                These are the topics that you&apos;re interested in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="isPrivate"
          render={({ field }) => (
            <FormItem className="mt-2 flex items-center justify-between gap-5">
              <div className="flex flex-1 flex-col gap-2.5">
                <FormLabel>Private Project</FormLabel>
                <FormDescription>
                  Mark this project as private. Private projects are only
                  visible to you and the members you invite. It can be changed
                  later.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={loading}
                  name={field.name}
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isFavourite"
          render={({ field }) => (
            <FormItem className="mt-2 flex items-center justify-between gap-5">
              <div className="flex flex-1 flex-col gap-2.5">
                <FormLabel>Favourate Project</FormLabel>
                <FormDescription>
                  Mark this project as a favourite. Favourite projects will be
                  highlighted and easily accessible.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={loading}
                  name={field.name}
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <SubmitButton loading={loading} className="h-9 w-full">
          Create Project
        </SubmitButton>
      </form>
    </Form>
  );
}
