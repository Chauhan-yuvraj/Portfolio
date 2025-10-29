// headerSection.tsx

import { ToggleTheme } from '@/components/toggle-theme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeaderSectionProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const HeaderSection = ({ isOpen, toggleMenu }: HeaderSectionProps) => {
    return (
        <div className="w-full flex border-b border-edge gap-4 justify-end px-8 py-2">
            <ToggleTheme />

            <Button
                variant="ghost"
                className={cn("group/toggle flex flex-col gap-1 lg:hidden")}
                size="icon"
                // Use the passed-in toggle function
                onClick={toggleMenu}
                // Use the passed-in state
                data-state={isOpen ? "open" : "closed"}
            >
                <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
                <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
    )
}

export default HeaderSection