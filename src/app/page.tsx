import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import TechIconBadge from "@/components/techicon-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellRing } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={cn("flex flex-col items-center justify-between p-24")}>
        <Hero />
        <div>
          <Button size="lg">Typescript</Button>
          <Button size="lg" variant="secondary">
            <BellRing className="mr-2 size-4 stroke-2 text-secondary-foreground" />
            React
          </Button>
        </div>
      </main>
    </>
  );
}
