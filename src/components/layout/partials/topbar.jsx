import { useRouter } from "next/router";
import { ArrowLeftFill, HomeFill } from "../../icon/fill";

export default function TopBar({title, url}){
    const router = useRouter()

    const move = (link) =>{
        if(link == "" || !link){
            window.history.back()
        } else {
            router.push(link)
        }
    }
    return (
        <div className="max-w-screen-sm absolute md:w-6/12 lg:w-4/12 mx-auto left-0 right-0 md:px-3">
            <div className="w-full bg-white p-5 relative border-b-2 border-gray-200">
                <div className="icon absolute top-0 bottom-0">
                    <div className="flex h-full items-center">
                        <div className="p-3 border shadow-md rounded-lg" onClick={()=>move(url)}>
                            <ArrowLeftFill/>
                        </div>
                    </div>
                </div>
                <div className="text text-center text-lg font-medium">
                    {title ?? "Title"}
                </div>

            </div>
        </div>
    )
}