import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailLayout } from "../../components/layout/nav/detailLayout"

export const BudgetCategory=()=>{
    const {category} = useParams()
    const navigate = useNavigate()
    const [categories, setCategories]=useState([
        {name:"Gaji", type:"pemasukan"},
        {name:"THR", type:"pemasukan"},
        {name:"Bonus", type:"pemasukan"},
        {name:"Operasional", type:"pengeluaran"},
        {name:"Keluarga", type:"pengeluaran"},
    ])

    useEffect(()=>{
        const dataStr = window.localStorage.getItem(category)
        const json = JSON.parse(dataStr)

        if(json === null){
            setCategories([{}])
        } else {
            const d = []
            json.map((j)=>{
                d.push({name:j, type:category})
            })
            setCategories(d)
        }
    }, [])

    return (
        <DetailLayout linkButton={"tambah/budget"} showButton={true} title={`Budget ${category[0].toUpperCase()+category.substr(1)}`}>
            <div className="flex mt-5 p-3">
                <div className="w-full">
                    <button onClick={()=>navigate("tambah/kategori")} className="mb-3 rounded-lg   px-4 py-2 bg-white border border-blue-500 text-blue-500">Tambah Kategori</button>
                    <h1 className="text-lg mb-3">Kategori {category}</h1>
                    {
                        categories.map((cat, key)=>{
                            if(cat.type === category){
                                return (
                                    <div key={key} className="bg-white p-3 mb-2 rounded border border-gray-200">
                                        {cat.name}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </DetailLayout>
    )
}