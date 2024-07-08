import { EncryptButton } from "@/components/dev/encryption-button";
import Test from "@/components/dev/test";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellRing } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={cn("flex flex-col items-center justify-between p-24")}>
        <Hero />
        <div className="flex items-center gap-x-2">
          <Button size="lg">Typescript</Button>
          <Button size="lg" variant="secondary">
            <BellRing className="mr-2 size-4 animate-wave stroke-2 text-secondary-foreground" />
            React
          </Button>
          <EncryptButton targetText="SarangKumar" />
          <Test />
        </div>
        {/* <div className="p-4">
          <LoadingDots variant="xs" />
          <LoadingDots variant="sm" />
          <LoadingDots variant="base" />
          <LoadingDots variant="lg" />
        </div> */}
      </main>
    </>
  );
}
