import LoginButton from "@/components/login-button";
import TechIconBadge from "@/components/techicon-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn("flex flex-col items-center justify-between p-24")}>
      <div className="space-y-3">
        <TechIconBadge
          name="nextjs"
          grayscale={true}
          iconName="nextjs2"
          className="size-8"
        />
        <TechIconBadge
          name="nextjs"
          grayscale={false}
          iconName="nextjs2"
          className="size-8"
        />
        <TechIconBadge name="nextjs" iconName="nextjs2" className="size-8" />
      </div>
      <LoginButton />
    </main>
  );
}
