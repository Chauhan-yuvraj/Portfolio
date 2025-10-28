import { FlipSentences } from "@/components/flip-sentence"
import { PronounceMyName } from "@/components/say-my-name"
import Separator from "@/components/Separator"
import { SimpleTooltip } from "@/components/ui/tooltip"
import { VerifiedIcon } from "@/components/verified-icon"
import { USER } from "@/features/profile/data/user"
import { Overview } from "./overview"

const IntroSection = () => {
    return (
        <div className='w-full py-8.5'>
            <div className="empty -z-20 h-40 border-y overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]" />
            <div className="name">
                <h1 className="flex items-center pl-4 text-3xl font-semibold">
                    {USER.displayName}
                    &nbsp;
                    <SimpleTooltip content="Verified">
                        <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
                    </SimpleTooltip>
                    {USER.namePronunciationUrl && (
                        <>
                            &nbsp;
                            <PronounceMyName
                                className="translate-y-px"
                                namePronunciationUrl={USER.namePronunciationUrl}
                            />
                        </>
                    )}
                </h1>
            </div>
            <div className="aniamted">
                <div className="h-12 border-y border-edge py-1 pl-4 sm:h-auto">
                    <FlipSentences sentences={USER.flipSentences} />
                </div>
            </div>
            <div className="separater overflow-hidden">
                <Separator />
            </div>
            <div className="overview">
                <Overview />
            </div>
            <div className="separater"></div>
            <div className="about"></div>
            <div className="aboutDec"></div>

        </div>
    )
}

export default IntroSection