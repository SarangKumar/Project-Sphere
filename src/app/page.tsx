import { EncryptButton } from "@/components/dev/encryption-button";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellRing } from "lucide-react";
import TaskManagementCard from "@/components/card/task-management-card";
import ColabCard from "@/components/card/colab-card";
import WebScrapeCard from "@/components/card/web-scrape-card";
import AuthenticationCard from "@/components/card/authentication-card";
import { Footer } from "@/components/footer";
import AiAssistantCard from "@/components/card/ai-assistant-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={cn(
          "sm:py-18 relative mx-auto max-w-screen-1.5xl overflow-hidden px-6 py-16 pt-8 md:py-24 md:pt-16 lg:py-24"
        )}
      >
        <Hero />
        <div className="flex items-center justify-center gap-x-2 py-8">
          <Button size="lg" variant="secondary">
            <BellRing className="mr-2 size-4 animate-wave stroke-2 text-secondary-foreground" />
            React
          </Button>
          <EncryptButton targetText="SarangKumar" />
        </div>
        <div className="relative grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <TaskManagementCard className="lg:col-span-2" />
          <AuthenticationCard />
          <ColabCard />
          <WebScrapeCard />
          <AiAssistantCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
