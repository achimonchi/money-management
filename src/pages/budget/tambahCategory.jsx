import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailLayout } from "../../components/layout/nav/detailLayout"


export const TambahCategory =()=>{
    const {category} = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const allCategory = window.localStorage.getItem(category)
        const json = JSON.parse(allCategory)
        if(json === null){
            const data = [name]
            const dataStr = JSON.stringify(data)
            window.localStorage.setItem(category, dataStr)
        } else {
            const data = [name, ...json]
            const dataStr = JSON.stringify(data)
            window.localStorage.setItem(category, dataStr)
        }
        alert("Tambah kategori "+category+" berhasil !")
        navigate(-1)
    }

    return (
        <DetailLayout showButton={false} title={`Kategori ${category[0].toUpperCase()+category.substr(1)}`}>
            <form className="p-3" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="">Nama Kategori</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="w-full px-3 py-2 bg-white border border-gray-200 rounded" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Jenis</label>
                    <input type="text" disabled value={category} className="w-full px-3 py-2 bg-gray-100 cursor-not-allowed border border-gray-200 rounded" />
                </div>
                <button className="bg-blue-500 px-4 py-2 w-full text-white font-medium rounded-lg mt-5">
                    Tambah {category[0].toUpperCase() + category.substr(1)}
                </button>
            </form>
        </DetailLayout>
    )
}