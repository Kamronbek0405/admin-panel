import React from 'react'
import { useModelsDelete } from '../../pages/models/service/mutation/useModelsDelete';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ModelsCard = ({ name, title, image_src, id }) => {
  const navigate = useNavigate()
  const { mutate } = useModelsDelete(id)

  const categoryDelete = (id) => {
    mutate(id, {
      onSuccess: () => {
        toast.success('Sizning malumotingiz o"chirilmoqda');
      }
    })
  }

  return (
    <div className='w-full  text-center    '>
      <ToastContainer />

      <div className=''>
        <div className='flex  gap-20 w-[100%] border border-gray-500 '>
          <h1 className=' w-[200px] flex items-center justify-center h-auto mt-5 text-lg font-medium'>{name}</h1>
          <h1 className=' w-[200px]  flex items-center justify-center  mt-5 text-lg font-medium'>{title}</h1>
          <div className=' w-[200px] flex items-center justify-center py-3'>
            <img className=' w-[120px]  h-[120px] ' src={`https://realauto.limsa.uz/api/uploads/images/${image_src}`} alt="img_src" />
          </div>
          <button className='py-4 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-red-500 mt-12 px-10 h-[60px] bg-red-500' onClick={() => categoryDelete(id)}>delete</button>
          <button className='py-4 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-slate-500 mt-12 px-10 h-[60px] bg-slate-500 ml-7' onClick={() => navigate(`/models-edit/${id}`)} >edit</button>
        </div>
      </div>
    </div>
  )
}
