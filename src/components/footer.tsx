import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6 lg:max-w-screen-1.5xl">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/SarangKumar/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Sarang
          </a>{" "}
          with lots of effort, debugging skills and{" "}
          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            ChatGPT
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
