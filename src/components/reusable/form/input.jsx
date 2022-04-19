

export const InputCustom=({onChange, type})=>{
    return (
        <div className="form-group mb-3">
            <label htmlFor="">Budget</label>
            <input type={type} onChange={onChange}  className="w-full px-3 py-2 bg-white border border-gray-200 rounded" />
        </div>
    )
}