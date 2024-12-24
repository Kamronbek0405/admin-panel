import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCategoryEdit } from '../../pages/category/service/mutation/useCategoryEdit'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetEdit } from '../../pages/category/service/mutation/useGetEdit'
import { Input } from '../../ui/input'
import Button from '../../ui/button/button'

export const LocationEdit = () => {
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
    <div>
    <form onSubmit={handleSubmit(editSubmit)}>
      <Input name="created_at" register={register} type="text" placeholder="created time" />
      <Input name="slug" register={register} type="text" placeholder="slug" />
      <Input name="text" register={register} type="text" placeholder="text" />
      <Input name="name" register={register} type="text" placeholder="name" />
      <Input name="image_src" register={register} type="file" placeholder="img" />
      <Button type="submit">send</Button>
    </form>
  </div>
  )
}
