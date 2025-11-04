
import { CollapsibleList } from "@/components/collapsible-list";
import { PROJECTS } from "@/features/profile/data/projects";
import { ProjectItem } from "./project-item";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
