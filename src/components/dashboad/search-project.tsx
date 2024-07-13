"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Input } from "../ui/input";

const SearchProject = ({ placeholder }: { placeholder: string }) => {
  function handleSearch(term: string) {
    console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        className="peer h-7 pl-8 text-xs font-medium"
        placeholder={placeholder}
        autoFocus
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-[1.8] text-border peer-focus:text-secondary-foreground" />
    </div>
  );
};

export default SearchProject;
