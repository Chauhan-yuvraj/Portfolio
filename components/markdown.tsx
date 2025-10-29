// Markdown.tsx

// 1. Change the import: Import the default synchronous 'Markdown' component
//    and ensure you are using the correct library path.
import MarkdownLib from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { UTM_PARAMS } from "@/config/site";
import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params";

// Define the expected props type based on the synchronous component
type MarkdownProps = React.ComponentProps<typeof MarkdownLib>;

// 2. Change the component name/usage to use the synchronous version
export function Markdown(props: MarkdownProps) {
  return (
    <MarkdownLib
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeExternalLinks,
          { target: "_blank", rel: "nofollow noopener noreferrer" },
        ],
        [rehypeAddQueryParams, UTM_PARAMS],
      ]}
      {...props}
    />
  );
}