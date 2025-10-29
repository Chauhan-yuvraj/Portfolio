/* eslint-disable @next/next/no-img-element */
import { PronounceMyName } from '@/components/say-my-name'
import { SimpleTooltip } from '@/components/ui/tooltip'
import { VerifiedIcon } from '@/components/verified-icon'
import { USER } from '@/features/profile/data/user'
import React from 'react'

const NameImage = () => {
    return (
        <div className="flex px-4 border-y border-edge py-2">
            <div className="relative lg:hidden">
                <img src="/india.svg" alt="" className='absolute left-0 w-12' />
                <img src="/pic.jpg" alt="yuvraj" className='rounded-full max-h-32 min-h-26 min-w-26 ring-1 ring-border ring-offset-2 ring-offset-background select-none ' />
            </div>
            <h1 className="flex items-center px-4 lg:px-0 text-3xl font-semibold ">
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
    )
}

export default NameImage