import { FlipSentences } from "@/components/flip-sentence"
import Separator from "@/components/Separator"
import { USER } from "@/features/profile/data/user"
import { Overview } from "./overview"
import { About } from "./about"
import HeaderBox from "./HeaderBox"
import NameImage from "./NameImage"


const IntroSectionContent = () => {
    return (
        <div className={`w-full `}>
            <div className="pointer-events-none fixed inset-0 z-20 flex justify-between">
                {/* Left border */}
                <div className="w-[.8rem] h-full border-r bg-background"></div>

                {/* Right border */}
                <div className="w-[0.8rem] h-full border-l bg-background"></div>
            </div>

            <div className="overflow-hidden">

                <HeaderBox />
            </div>

            <NameImage />

            <div className="h-12 flex border-y border-edge items-center px-4 ">
                <FlipSentences sentences={USER.flipSentences} />
            </div>

            <div className="separater overflow-hidden">
                <Separator />
            </div>
            <div className="overview overflow-hidden ">
                <Overview />
            </div>
            <div className="separater overflow-hidden">
                <Separator />
            </div>
            <div className="about overflow-hidden">
                <About />
            </div>
            <div className="separater overflow-hidden">
                <Separator />
            </div>
            <div className="">
            </div>

        </div>
    )
}

export default IntroSectionContent 