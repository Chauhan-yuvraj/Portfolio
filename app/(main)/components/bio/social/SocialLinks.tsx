import React from "react";

import { SocialLinkItem } from "./social-link-item";
import { Panel } from "@/components/panel";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute  inset-0  grid grid-cols-1 gap-4 max-sm:hidden  sm:grid-cols-2">
          <div className="border-r  border-edge"></div>
          <div className="border-l z-20 border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}
