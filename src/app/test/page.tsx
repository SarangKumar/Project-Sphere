"use client";

import { Gauge } from "@/components/dashboad/guage";
import LoadingDots from "@/components/loading-dots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
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
      <Gauge
        value={75}
        size="50%"
        primary="danger"
        gapPercent={4}
        strokeWidth={10}
      />
      <Gauge
        value={75}
        size="50%"
        primary="warning"
        gapPercent={4}
        strokeWidth={10}
      />
      <Gauge
        value={75}
        size="50%"
        primary="success"
        gapPercent={4}
        strokeWidth={10}
      />
      <Gauge
        value={75}
        size="50%"
        primary="info"
        gapPercent={4}
        strokeWidth={10}
      />
      <Gauge
        value={75}
        size="50%"
        primary="text-purple-500"
        gapPercent={4}
        strokeWidth={10}
      />
      <Progress value={75} className="text-success" />
      <p className="text-warn">adff</p>
    </main>
  );
};

export default TestPage;
