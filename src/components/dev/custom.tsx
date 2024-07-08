// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import React from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Tag, TagInput } from "emblor";
// import { toast } from "../ui/use-toast";

// const FormSchema = z.object({
//   topics: z.array(
//     z.object({
//       id: z.string(),
//       text: z.string(),
//     })
//   ),
// });

// export function Demo() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       topics: [],
//     },
//   });

//   const [tags, setTags] = React.useState<Tag[]>([]);
//   const { setValue } = form;

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col items-start space-y-8"
//       >
//         <FormField
//           control={form.control}
//           name="topics"
//           render={({ field }) => (
//             <FormItem className="flex flex-col items-start">
//               <FormLabel className="text-left">Topics</FormLabel>
//               <FormControl className="w-full">
//                 <TagInput
//                   {...field}
//                   placeholder="Enter a topic"
//                   tags={tags}
//                   className="sm:min-w-[450px]"
//                   setTags={(newTags) => {
//                     setTags(newTags);
//                     setValue("topics", newTags as [Tag, ...Tag[]]);
//                   }}
//                 />
//               </FormControl>
//               <FormDescription className="text-left">
//                 These are the topics that you&apos;re interested in.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }
