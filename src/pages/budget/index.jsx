import { InboxOutline, ShoppingBagOutline } from "../../components/icon/outline"
import { Layout } from "../../components/layout/nav/layout"


export const BudgetIndex=()=>{
    return (
        <Layout menuActive="budget">
            <div className="content h-full">
                <div className="flex justify-center gap-5 items-center h-full">
                    <div className="box cursor-pointer hover:bg-gradient-to-b drop-shadow-xl flex flex-col text-white justify-center items-center rounded-lg bg-gradient-to-t from-red-800 to-red-500 h-32 w-32">
                        <ShoppingBagOutline size="60" className="text-white"/>
                        <span className="font-medium">Pengeluaran</span>
                    </div>
                    <div className="box cursor-pointer hover:bg-gradient-to-b drop-shadow-xl flex flex-col text-white justify-center items-center rounded-lg bg-gradient-to-t from-blue-800 to-blue-500 h-32 w-32">
                        <InboxOutline size="60" className="text-white"/>
                        <span className="font-medium">Pemasukan</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}