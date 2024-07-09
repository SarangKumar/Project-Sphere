"use client";

import LoadingDots from "@/components/loading-dots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState, FormEvent } from "react";

const TestPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleUrlSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/v1/scrape", { url });
      console.log(response.data);
      setResult(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="m-8">
      <form onSubmit={handleUrlSubmit} className="space-y-2">
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit" className="ml-auto min-w-14">
          {loading ? <LoadingDots variant="sm" /> : "Submit"}
        </Button>
      </form>
      <p className="mt-4 text-sm">{result}</p>
    </main>
  );
};

export default TestPage;
