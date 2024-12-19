import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { loadState, saveState } from '../../config/storage'
import { useLogin } from '../../service/mutation/uselogin'

export const Login = () => {
  const user = loadState("user")
  
  const { handleSubmit, register, reset } = useForm()
  const { mutate, isSuccess, data } = useLogin()

  const submit = (data) => {
    mutate(data)
  }

  if (isSuccess && data) {
    saveState("user", data) 
    return <Navigate to="/" /> 
  }

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-around'>
        <div className='bg-[url("https://media.istockphoto.com/id/1429201424/vector/blog-social-media-platform-influencer-personal-brand-promotion-recent-stories-and-post.jpg?s=612x612&w=0&k=20&c=tROfrRi-btklIadu9ESPOon85w5xjAop_BybZIcO2Lc=")] bg-no-repeat bg-cover w-[600px] h-[400px]'>

        </div>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-5 w-[400px] h-[400px] items-center justify-center rounded-3xl shadow-lg shadow-gray-400 border' >
            <input className='w-[300px] py-3 border-2 px-2 rounded-xl border-black' {...register("phone_number")} type="text" required placeholder='phone number' />
            <input className='w-[300px] py-3 border-2 px-2 rounded-xl border-black' {...register("password")} type="password" required placeholder='password' />
            <button className='w-[300px] py-3 rounded-xl bg-blue-500  text-white hover:bg-transparent transition-all  duration-300 hover:text-blue-500 font-medium  border-2 border-blue-500' type='submit'>Send</button>
        </form>
    </div>
  )
}
