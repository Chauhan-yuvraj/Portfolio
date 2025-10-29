import { FlipSentences } from "@/components/flip-sentence"
import Separator from "@/components/Separator"
import { USER } from "@/features/profile/data/user"
import { Overview } from "./overview"
import { About } from "./about"
import HeaderBox from "./HeaderBox"
import NameImage from "./NameImage"


const IntroSectionContent = () => {
    return (
        <div className={`w-full`}>
            <div className="pointer-events-none fixed inset-0 w-full px-3">
                <div className="w-full h-full border-x"></div>
            </div>

            <HeaderBox />

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
            <div className="">
            </div>

        </div>
    )
}

export default IntroSectionContent 