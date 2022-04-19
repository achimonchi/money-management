import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailLayout } from "../../components/layout/nav/detailLayout"
import { InputCustom } from "../../components/reusable/form/input"


export const TambahBudget=()=>{
    const navigate = useNavigate()
    const {category} = useParams()
    const[categories, setCategories]=useState([])
    // const [budget, setBudget] = useState({total:0,category:category,notes:""})
    const [total, setTotal] = useState(0)
    const [notes, setNotes] = useState(0)
    const [kategori, setKategori] = useState("")
    
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
            setKategori(d[0].name)
        }
    }, [])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const budget = {
            total : total,
            notes: notes,
            type: category,
            category: kategori
        }

        const allBudgets = window.localStorage.getItem("budgets")
        const json = JSON.parse(allBudgets)
        if(json === null){
            const budgets = [budget]
            const budgetsStr = JSON.stringify(budgets)

            window.localStorage.setItem("budgets", budgetsStr)
        } else {
            const budgets = [budget, ...json]
            const budgetsStr = JSON.stringify(budgets)

            window.localStorage.setItem("budgets", budgetsStr)
        }
        alert("Tambah budget "+category+" berhasil !")
        navigate(-1)
    }

    return (
        <DetailLayout title={`Tambah Budget ${category[0].toUpperCase()+category.substr(1)}`} showButton={false}>
            <form onSubmit={handleSubmit} className="p-3">
                <InputCustom onChange={(e)=>setTotal(e.target.value)} type="number"/>
                <div className="form-group mb-3">
                    <label htmlFor="">Kategori</label>
                    <select onChange={(e)=>setKategori(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-200 rounded" name="" id="">
                        {
                            categories.length > 0 
                                ? categories.map((cat, key)=>{
                                    return (
                                        <option key={key} value={cat.name}>{cat.name}</option>
                                    )
                                })
                                : ""
                        }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Catatan</label>
                    <textarea onChange={(e)=>setNotes(e.target.value)} style={{resize:"none"}} className="w-full px-3 py-2 bg-white border border-gray-200 rounded" name="" id="" cols="30" rows="5"></textarea>
                </div>
                <button className="bg-blue-500 px-4 py-2 w-full text-white font-medium rounded-lg mt-5">
                    Tambah Budget {category[0].toUpperCase() + category.substr(1)}
                </button>
            </form>
        </DetailLayout>
    )
}