"use client";

import { Gauge } from "@/components/dashboad/guage";
import LoadingDots from "@/components/loading-dots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { BACKWARD_COLORS } from "@/constants";
import { generateColorMap, interpolateColor } from "@/lib/utils";
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

  const projectLimit = 8;

  const colorMap = generateColorMap(
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    "green",
    "red"
  );

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
      <div className="mb-4 flex max-w-screen-md items-center justify-around">
        <Gauge
          className=""
          value={0}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={1}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={2}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={3}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={4}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={5}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={6}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={7}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
        <Gauge
          className=""
          value={8}
          max={projectLimit}
          primary={colorMap}
          size="35px"
        />
      </div>
      <Progress value={75} className="text-success" />
    </main>
  );
};

export default TestPage;
