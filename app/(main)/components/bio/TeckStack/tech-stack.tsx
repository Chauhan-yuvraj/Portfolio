import { cn } from "@/lib/utils";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { TECH_STACK_GROUPS } from "@/features/profile/data/tech-stack";
import Stack from "./Stack";

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          <Stack techStack={TECH_STACK_GROUPS.frontend} techStackName="Fronted Development" />

          <Stack techStack={TECH_STACK_GROUPS.backend} techStackName="Backed Development" />

          <Stack techStack={TECH_STACK_GROUPS.tools} techStackName=" Tools & Others" />
        </ul>
      </PanelContent>
    </Panel>
  );
}
