/* eslint-disable @next/next/no-img-element */
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { blogsList } from "@/features/profile/data/blogs";
import MiniSeparator from "./miniSeparator";

function Blogs() {
  return (
    <Panel id="blog" className="">
      <PanelHeader>
        <PanelTitle>Blogs</PanelTitle>
      </PanelHeader>

      {blogsList.map((blog, index) => (
        <div className="" key={index}>
          <PanelContent className="flex flex-col sm:flex-row w-full justify-between p-2 sm:p-0  gap-3 sm:gap-0  border-y">
            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center">
              <img src={blog.img} alt={blog.title} style={{ maxWidth: 250 }} />
            </div>
            <div className="flex-1 hidden sm:grid sm:grid-cols-[20px_4fr_20px_20px] sm:grid-rows-[4fr_20px_4fr]">
              {/* Row 1 */}
              <div className="border-x" />
              <div className="text-4xl p-4 underline cursor-pointer select-none">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  {blog.title}
                </a>
              </div>
              <div className="border-x" />
              <div />

              {/* Row 2 */}
              <div className="border" />
              <div className="border-y" />
              <div className="border" />
              <div className="border-y" />

              {/* Row 3 */}
              <div className="border-x" />
              <div className="p-4 font-mono text-sm text-muted-foreground select-none">
                {blog.date}
              </div>
              <div className="border-x" />
              <div />
            </div>

            <div className="sm:hidden flex  items-center w-full justify-between">
              <div className="text-2xl p-4 underline cursor-pointer select-none">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  {blog.title}
                </a>
              </div>
              <div className="p-4 font-mono text-sm text-muted-foreground select-none">
                {blog.date}
              </div>
            </div>
          </PanelContent>
          <div className="hidden sm:block">
            <MiniSeparator />
          </div>
        </div>
      ))}
    </Panel>
  );
}

export default Blogs;
