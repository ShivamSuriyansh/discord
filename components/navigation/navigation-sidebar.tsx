import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import db from '@/lib/db'
import NavigationAction from "./navigation-action";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async()=>{

    const profile =await currentProfile();
    if(!profile){
        return redirect('/')
    }

    const servers = await db.server.findMany({
        where : {
            member : {
                some: {
                    profileId : profile.id
                }
            }
        }
    })


    console.log(servers);
    return (
        <div className=" space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
            <NavigationAction />
            <Separator className=" h-[2px] w-10 mx-auto bg-zinc-300 dark:bg-zinc-700 rounded-md" />
            <ScrollArea className=" flex-1 w-full">
                {servers.map((server)=>(
                    <div key={server.id}  className="mb-8 h-full">
                        <NavigationItem id={server.id} name={server.name} imageUrl={server.imageUrl} />
                    </div>
                ))}
            </ScrollArea>

            <div className=" flex pb-3 items-center mt-auto flex-col  gap-y-4">
                <ModeToggle />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements : {
                            avatarBox : "h-[48px] w-[48px]"
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default NavigationSidebar;