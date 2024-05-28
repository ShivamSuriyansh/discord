import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col text-3xl font-bold text-indigo-500">
     <UserButton afterSignOutUrl="/signIn" /> 
     <ModeToggle/>
    </div>
    
  );
}
