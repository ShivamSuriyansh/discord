"use client"

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = ()=>{

    const {onOpen} = useModal();
    return (
        <div>
            <ActionTooltip side="right" align="start" label="Add a Server">
                <button onClick={()=>{onOpen("createServer"); console.log('hello')}} className=" group flex items-center">
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700 transition-all bg-background overflow-hidden items-center justify-center">
                        <Plus className=" group-hover:text-white transition text-emerald-500" size={25} />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}

export default NavigationAction;