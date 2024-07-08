// import Demo from "@/components/dev/custom";
import Card from "@/components/card/card";
import { EncryptButton } from "@/components/dev/encryption-button";
import Test from "@/components/dev/test";
import Flame from "@/components/card/flame";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellRing } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={cn(
          "sm:py-18 container relative mx-auto overflow-hidden px-6 py-16 pt-8 md:py-24 md:pt-16 lg:px-16 lg:py-24 xl:px-20"
        )}
      >
        <Hero />
        {/* <div className="flex items-center gap-x-2">
          <Button size="lg">Typescript</Button>
          <Button size="lg" variant="secondary">
            <BellRing className="mr-2 size-4 animate-wave stroke-2 text-secondary-foreground" />
            React
          </Button>
          <Button variant="secondary">Secondary</Button>
          <EncryptButton targetText="SarangKumar" />
        </div> */}
        <div className="relative grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Card key={1} className="lg:col-span-2" />
          {/* <Card key={2} />
          <Card key={3} /> */}
        </div>
      </main>
    </>
  );
}
