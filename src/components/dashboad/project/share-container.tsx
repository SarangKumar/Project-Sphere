// 'use client';
// import React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { createSharelinkSchema } from "@/types/schema";
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CalendarIcon } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";

// const ShareContainer = ({projectId}: {projectId: string | string[]}) => {
//   console.log("form share")

//     const form = useForm<z.infer<typeof createSharelinkSchema>>({
//       resolver: zodResolver(createSharelinkSchema),
//       defaultValues: {
//         expiresAt: new Date(),
//         role: "VIEWER",
//         projectId: typeof projectId === "string" ? projectId : projectId[0],
//         name: "",
//       },
//     });

//      function onSubmit(values: z.infer<typeof createSharelinkSchema>) {
//        // Do something with the form values.
//        // ✅ This will be type-safe and validated.
//        console.log(values);
//      }

//      async function createLink(){}

//   return (
//     <section className="border-b p-4 md:p-6">
//       <h2 className="mb-4 text-base">Share</h2>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="expiresAt"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Share Link Title</FormLabel>
//                 <FormControl>
//                   <Input placeholder="name" {...field} />
//                 </FormControl>
//                 <FormDescription>Link expiry time</FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="expiresAt"
//             render={({ field }) => (
//               <FormItem className="flex flex-col">
//                 <FormLabel>Date of birth</FormLabel>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant={"outline"}
//                         className={cn(
//                           "w-[240px] pl-3 text-left font-normal",
//                           !field.value && "text-muted-foreground"
//                         )}
//                       >
//                         {field.value ? (
//                           format(field.value, "PPP")
//                         ) : (
//                           <span>Expiry Date</span>
//                         )}
//                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={field.value}
//                       onSelect={field.onChange}
//                       // disabled={(date) =>
//                       //   date > new Date() || date < new Date("1900-01-01")
//                       // }
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//                 <FormDescription>
//                   Your date of birth is used to calculate your age.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit">Create Share Link</Button>
//         </form>
//       </Form>

//       {/* <Button onClick={createLink}>Create link</Button> */}
//     </section>
//   );
// };

// export default ShareContainer;
