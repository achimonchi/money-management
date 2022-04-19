import { fromJSON } from "postcss"
import { useEffect } from "react"
import { useState } from "react"
import { ChevronLeftFill, ChevronRightFill } from "../../components/icon/fill"
import { Layout } from "../../components/layout/nav/layout"


const tabs = [
    "pengeluaran","pemasukan"
]

// const data = [
//     {
//         name : "Tabungan",
//         type : "pengeluaran",
//         total : 6000000,
//     },
//     {
//         name : "Online Shop",
//         type : "pengeluaran",
//         total : 2500000,
//     },
//     {
//         name : "Online Shop",
//         type : "pengeluaran",
//         total : 2500000,
//     },
// ]

export const Home=()=>{
    const [tabActive, setTabActive] = useState("pengeluaran")
    const [budget, setBudget] = useState(13500000)
    const [expanse, setExpanse] = useState(10500000)
    const [budgets, setBudgets] = useState([])
    const [pembagi, setPembagi] = useState(1)

    useEffect(()=>{
        const data = window.localStorage.getItem("budgets")
        const json = JSON.parse(data)
        if(json === null) {
            setBudgets([])
        } else {
            setBudgets(json)
            let total = 0
            let totalExpanse = 0
            json.map((j)=>{
                if(j.type === "pemasukan"){
                    total += parseInt(j.total)
                } else {
                    totalExpanse += parseInt(j.total)
                }

            })
            setBudget(total)
            setExpanse(totalExpanse)
            setPembagi(totalExpanse)
        }
    },[])

    useEffect(()=>{
        if(tabActive === "pemasukan"){
            setPembagi(budget)
        } else {
            setPembagi(expanse)
        }
    }, [tabActive])
    return (
        <Layout menuActive={"home"}>
            <div className="content h-full">
                <div className="banner py-10 border bg-gradient-to-r from-blue-800 to-blue-500 p-3">
                    <div className="header flex justify-between">
                        <div className="left ">
                            <div className="border border-white p-2 rounded-full">
                                <ChevronLeftFill size={20} className="text-white"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="text-white">2022</h2>
                            <h1 className="text-2xl md:text-3xl text-white uppercase font-bold">April</h1>
                        </div>
                        <div className="right">
                            <div className="border border-white p-2 rounded-full">
                                <ChevronRightFill size={20} className="text-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="body text-center text-white mt-10">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Rp. {budget.toLocaleString()}
                        </h1>
                        <h2 className="text-lg opacity-70">
                            Total Budget
                        </h2>
                    </div>
                    
                </div>
                <div className="sisa">
                    <div className="bg-[#BFD1FF] p-3 text-black ">
                        <div className="opacity-80 text-center">
                            Sisa Budget : <span className="font-semibold">Rp. {(budget - expanse).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className="detail h-full bg-[#F2F3FF]">
                    <div className=" p-3 ">
                        <div className="tabs pt-5">
                            {
                                tabs.map((tab, key)=>(
                                    <span key={key} onClick={()=>setTabActive(tab)} className={`mr-2 rounded px-4 py-2 ${tab === tabActive ? 'font-semibold border border-blue-800 border-2 text-blue-800' : ' opacity-70  border border-transparent border-2 '}`}>
                                        {tab.toUpperCase()}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="content-tabs mt-5">
                            {
                                budgets.map((d, key)=>{
                                    if(d.type === tabActive){
                                        return <div className="flex flex-col mb-3">
                                            <span className="font-medium">{d.category} - <span className="text-sm">(Rp. {parseInt(d.total).toLocaleString()})</span></span>
                                            <span className="font-bold my-1">{(d.total / pembagi * 100).toFixed(0)}%</span>
                                            <div className="border border-black rounded-full">
                                                <div className="p-2 bg-blue-500 rounded-full" style={{width:`${(d.total / pembagi * 100).toFixed(0)}%`}}></div>
                                            </div>
                                        </div>
                                    } 
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}