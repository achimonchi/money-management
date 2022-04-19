
import { useNavigate } from "react-router-dom";
import { CalendarFill, ChartPieFill, HomeFill, UserFill } from "../../icon/fill";

export default function Footer({menuActive, sizeIcon}){
    const navigate = useNavigate()
    const menus = [
        {
            name : "home",
            icon : <HomeFill size={sizeIcon}/>,
            url : "/"
        },
        {
            name : "budget",
            icon : <ChartPieFill size={sizeIcon}/>,
            url : "/budget"
        },
        {
            name : "report",
            icon : <CalendarFill size={sizeIcon}/>,
            url : "/"
        },
        {
            name : "profile",
            icon : <UserFill size={sizeIcon}/>,
            url : "/"
        },
    ]

    const move=(link)=>{
        navigate(link)
    }
    return (
        <div className="">
            <div className=" bottom-4 p-2 bg-white rounded-lg w-full">
                <div className="flex flex-row justify-around">
                    {
                        menus.map((menu, key)=>(
                            <div key={"nav-"+key} onClick={()=>move(menu.url)} className={`bottombar-item ${menuActive === menu.name ? "text-blue-600 active " : " text-gray-500"} hover:text-black duration-300 flex flex-col justify-center items-center cursor-pointer p-2`}>
                                {menu.icon}
                                <span className="text-bottombar text-xs md:text-base">{menu.name[0].toUpperCase()+menu.name.substring(1)}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}