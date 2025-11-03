import Separator from "@/components/Separator"
import { GitHubContributions } from "./github-contribution/GitHubContributions"
import { SocialLinks } from "./social/SocialLinks"
import { TechStack } from "./TeckStack/tech-stack"

const BioSectionWrapper = () => {
    return (
        <div>
            <GitHubContributions />
            <Separator />

            <SocialLinks />
            <Separator />

            <TechStack />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <Separator />
        </div>
    )
}

export default BioSectionWrapper