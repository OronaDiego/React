import { useState, useEffect } from "react"
import { getAllCategories } from "../services/productServices"

export const useGetAllCategories = ()=>{
    const [categories, setCategories]= useState([])

    useEffect(() => {
        getAllCategories(30)
        .then((res)=>{setCategories(res.data)})
        .catch((err) => { console.log(err) })
}, [])
    return {categories}
}