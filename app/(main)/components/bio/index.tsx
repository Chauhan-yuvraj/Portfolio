import Separator from "@/components/Separator"
import { GitHubContributions } from "./github-contribution/GitHubContributions"
import { SocialLinks } from "./social/SocialLinks"
import { TechStack } from "./TeckStack/tech-stack"
import Blogs from "./blog/Blogs"
import { MobileTeckStack } from "./TeckStack/mobile-tech-stack"

const BioSectionWrapper = () => {
    return (
        <div className="w-full">
            <div className="overflow-hidden">
                <GitHubContributions />
            </div>
            <div className="overflow-hidden">

                <Separator />
            </div>
            <div className="overflow-hidden">

                <SocialLinks />
            </div>

            <div className="overflow-hidden">
                <Separator />
            </div>

            {/* Desktop Tech Stack (visible ≥ lg) */}
            <div className="hidden lg:block overflow-hidden">
                <TechStack />
            </div>

            {/* Mobile Tech Stack (visible < lg) */}
            <div className="block lg:hidden overflow-hidden">
                <MobileTeckStack />
            </div>
            <div className="overflow-hidden">
                <Separator />
            </div>
            <div className="overflow-hidden">

                <Blogs />
            </div>
            <div className="overflow-hidden">
                <Separator />
            </div>
        </div>
    )
}

export default BioSectionWrapper
