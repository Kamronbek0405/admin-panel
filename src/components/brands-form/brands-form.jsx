import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateBrand } from '../../pages/brants/service/mutation/useCreateBrand'
import { useNavigate } from 'react-router-dom'


export const BrandsForm = () => {
    const { handleSubmit, register, reset } = useForm()
    const { mutate } = useCreateBrand()
    const navigate = useNavigate()

    const submit = (data) => {
        const formData = new FormData();
    
        formData.append('title', data.title);  // Matn ma'lumotlarini qo'shyapmiz
    
        // Faylni qo'shish - fayl birinchi element sifatida massiv bo'ladi
        if (data.image_src && data.image_src[0]) {
            formData.append('images', data.image_src[0]);
        }
    
        // FormData obyektini ko'rish
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
    
        mutate(formData, {
            onSuccess: () => {
              
                reset()
                navigate(-1)
            }
        })
    }
    

    return (
        <div className='flex items-center justify-center py-12 bg-slate-500'>
            <form className='w-[500px] h-[600px] border-2  flex flex-col gap-5 px-20 py-40 rounded-[30px] bg-white' onSubmit={handleSubmit(submit)} encType="multipart/form-data">
                <input  className='w-[350px] py-4 outline-bground  rounded-xl px-3 border-bground border'  {...register("title")} type="text" required placeholder='name' />
                <input  className='w-[350px] py-3 outline-bground rounded-xl px-3 ' {...register("image_src")} type="file" required />
                <button className='w-[350px] py-3 bg-bground rounded-xl text-white font-medium text-lg hover:bg-transparent hover:shadow-lg hover:border hover:border-bground hover:shadow-bground hover:text-bground transition-all duration-300 px-3' type='submit'>Send</button>
            </form>
        </div>
    )
}




