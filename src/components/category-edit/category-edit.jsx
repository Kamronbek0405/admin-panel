import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCategoryEdit } from '../../pages/category/service/mutation/useCategoryEdit'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetEdit } from '../../pages/category/service/mutation/useGetEdit'

export const CategoryEdit = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetEdit(id) // Ma'lumotlarni olish
    const { mutate } = useCategoryEdit(id) // `id` ni uzatish kerak
    const { handleSubmit, register, reset, setValue } = useForm()
    const navigate = useNavigate()
    const [imagePreview, setImagePreview] = useState(data?.image_src) // Rasmni ko'rsatish uchun holat

    useEffect(() => {
        if (data) {
            setValue("name_en", data.name_en)
            setValue("name_ru", data.name_ru)
            setValue("image_src", data.image_src)
            setImagePreview(data.image_src) // Rasmni ko'rsatish uchun
        }
    }, [data, setValue])

    const editSubmit = (value) => {
        const formData = new FormData()
        formData.append('name_en', value.name_en)
        formData.append('name_ru', value.name_ru)

        if (value.image_src && value.image_src[0]) {
            formData.append('images', value.image_src[0])
        }

        mutate(formData, {
            onSuccess: () => {
                navigate(-1)
            }
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file)) 
        }
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className='flex items-center justify-center h-[92vh] bg-slate-500 flex-col'>
            
            <form className='w-[500px] h-[600px] border-2  flex flex-col gap-7 px-20 py-16 text-center rounded-[30px] bg-white' onSubmit={handleSubmit(editSubmit)} encType="multipart/form-data">
                <h1></h1>
                <input className='w-[350px] py-4 outline-bground  rounded-xl px-3 border-bground border'
                    {...register("name_en")} 
                    type="text" 
                    placeholder="English Name" 
                    required 
                />
                <input className='w-[350px] py-4 outline-bground  rounded-xl px-3 border-bground border'
                    {...register("name_ru")} 
                    type="text" 
                    placeholder="Russian Name" 
                    required 
                />
                <div > 
                   <div className='w-[100px] h-[100px] flex items-center justify-center text-gray-600 border-gray-500 border mb-2'> {imagePreview ? <img src={imagePreview} alt="Preview" width="100"  height="200"/> : "img" }</div>
                    <input className='w-[350px] py-4   rounded-xl px-3 ' 
                        {...register("image_src")} 
                        type="file" 
                        onChange={handleFileChange} 
                    />
                  
                </div>
                <button className='w-[350px] py-4 bg-bground rounded-xl text-white font-medium text-lg hover:bg-transparent hover:shadow-lg hover:border hover:border-bground hover:shadow-bground hover:text-bground transition-all duration-300 px-3 ' type="submit">Send</button>
            </form>
        </div>
    )
}
