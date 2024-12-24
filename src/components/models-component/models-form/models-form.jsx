import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useGetOne } from '../../../pages/models/service/query/useGetOne'
import { useCreateModels } from '../../../pages/models/service/mutation/useCreateModels'

export const ModelsForm = () => {
    const { handleSubmit, register, reset } = useForm()
    const { mutate } = useCreateModels()
    const navigate = useNavigate()
    const { data, isLoading } = useGetOne()
    console.log(data);

    const submit = (formData) => {
        const newFormData = new FormData();
        newFormData.append('name', formData.name); // mashina nomi
        newFormData.append('title', formData.title); 
        // console.log(formData.title);

        for (let pair of newFormData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        mutate(newFormData, {
            onSuccess: (res) => {
                console.log("done");
                // reset();
                // navigate(-1); 
            }
        });
    }

    return (
        <div className='flex items-center justify-center py-12 bg-slate-500'>
            <form className='w-[500px] h-[600px] border-2 flex flex-col gap-5 px-20 py-40 rounded-[30px] bg-white' onSubmit={handleSubmit(submit)}>
                <input 
                    className='w-[350px] py-4 outline-bground rounded-xl px-3 border-bground border' 
                    {...register("name")} 
                    type="text" 
                    required 
                    placeholder='Mashina nomi' 
                />

                {isLoading ? (
                    <h1>Yuklanmoqda...</h1>
                ) : (
                    <div>
                        <select 
                            className='w-[350px] py-4 px-3 border-bground border' 
                            {...register("title")} 
                            required
                        >
                            {data?.data.map(item => (
                                <option key={item.id} value={item.title}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <button 
                    className='w-[350px] py-3 bg-bground rounded-xl text-white font-medium text-lg hover:bg-transparent hover:shadow-lg hover:border hover:border-bground hover:shadow-bground hover:text-bground transition-all duration-300 px-3' 
                    type='submit'>
                    Yuborish
                </button>
            </form>
        </div>
    )
}
