import { useNavigate } from "react-router-dom"
import { ArrowLeftFill } from "../../icon/fill"


export const DetailLayout=({children, title, showButton})=>{
    const navigate = useNavigate()

    return (
        <div className="max-w-screen-sm mx-auto h-full relative overflow-hidden bg-[#F2F3FF]">
            <div className="flex flex-col h-full">
                <div className="flex-none bg-white">
                    <div className="border p-3 flex items-center">
                        <div onClick={()=>navigate(-1)} className="flex-none absolute">
                            <ArrowLeftFill size={24}/>
                        </div>
                        <div className="flex-1 text-center text-lg font-medium">
                            {title}

                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-scroll h-full">
                    {children}
                </div>
                {
                    showButton
                        ? <div className="flex-none p-3">
                        <button className="rounded-lg w-full font-medium text-white bg-blue-500 p-3 text-center">
                            <h1>Tambah {title}</h1>
                        </button>
                    </div>
                        :  ""
                }
            </div>
        </div>
    )
}