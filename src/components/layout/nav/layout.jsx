import Footer from "../partials/footer"


export const Layout=({children, menuActive})=>{
    return (
        <div className="max-w-screen-sm mx-auto h-full relative overflow-hidden bg-[#F2F3FF]">
            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-scroll">
                    {children}
                </div>
                <div className="flex-none p-3 bg-[#F2F3FF]">
                    <div className="border rounded-lg">
                        <Footer menuActive={menuActive}/>
                    </div>
                </div>
            </div>
        </div>
    )
}