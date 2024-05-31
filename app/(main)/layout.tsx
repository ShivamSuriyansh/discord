import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = ({children}: {children: React.ReactNode})=>{
    return(
        <div>
            <div className=" hidden h-full md:flex flex-col w-[72px] fixed inset-y-0">
                <NavigationSidebar />
            </div>
            <main className=" md:pl-[72px] h-full">
                {children}
            </main>
            
        </div>
    )
}

export default MainLayout;