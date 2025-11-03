import { SimpleTooltip } from '@/components/ui/tooltip';
import { TechStack } from '@/features/profile/types/tech-stack';
import Image from 'next/image';
import React from 'react';

type StackProps = {
    techStack: TechStack[];
    techStackName: string;
};

const Stack: React.FC<StackProps> = ({ techStack, techStackName }) => {

    const displayStack = [...techStack, ...techStack];

    return (
        <div
            className="relative group w-full flex overflow-hidden bg-background border border-edge rounded-md"
        >
            <ul
                className={`flex py-4 gap-3 animate-scroll group-hover:paused  
                    }`}
            >
                {displayStack.map((tech, index) => (
                    <li key={`${tech.key}-${index}`} className="shrink-0 list-none">
                        <SimpleTooltip content={tech.title}>
                            <a
                                href={tech.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={tech.title}
                            >
                                {tech.theme ? (
                                    <>
                                        <Image
                                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                                            alt={`${tech.title} light icon`}
                                            width={32}
                                            height={32}
                                            className="hidden [html.light_&]:block"
                                        />
                                        <Image
                                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                                            alt={`${tech.title} dark icon`}
                                            width={32}
                                            height={32}
                                            className="hidden [html.dark_&]:block"
                                        />
                                    </>
                                ) : (
                                    <Image
                                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                                        alt={`${tech.title} icon`}
                                        width={32}
                                        height={32}
                                        unoptimized
                                    />
                                )}
                                <span className="sr-only">{tech.title}</span>
                            </a>
                        </SimpleTooltip>
                    </li>
                ))}
            </ul>

            <div
                className="absolute right-0 top-0 bottom-0 flex items-center px-2 text-center bg-background/60 backdrop-blur-md z-10 font-mono text-sm text-muted-foreground select-none whitespace-nowrap"
            >
                {techStackName}
            </div>
        </div>
    );
};

export default Stack;