import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBrandsDelete } from '../../pages/brants/service/mutation/useBrandsDelete'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export const BrandCard = ({image_src, title, id}) => {
    const navigate = useNavigate()
    const {mutate} = useBrandsDelete(id)
   
    const brandDelete = () => {
        mutate(id,  {
            onSuccess: () => {
              toast.success('Sizning malumotingiz o"chirilmoqda');
}
        })
    }
  return (
    <div>
        <ToastContainer/>
        <div className='w-[300px] h-[430px] flex flex-col justify-center gap-10 shadow-lg hover:shadow-md shadow-gray-400 border px-10 mt-10'>
       
       <img className='w-[250px] h-[250px] bg-cover ' src={`https://realauto.limsa.uz/api/uploads/images/${image_src}`} alt="img_src" />
       <h1>{title}</h1>
       <div className='flex items-center gap-5'>
       <button className=' bg-red-500 rounded-xl hover:shadow-lg hover:shadow-red-400 py-2 text-white w-[100px]' onClick={() => brandDelete(id)}>delete</button>
        <button className='bg-slate-500 rounded-xl hover:shadow-lg hover:shadow-slate-500 py-2 text-white w-[100px]' onClick={() => navigate(`/brand-edit/${id}`)} >edit</button>
       </div>

   </div>
    </div>
  )
}

// import React from 'react'
// import { useCategoryDelete } from '../../pages/category/service/mutation/useCategoryDelete'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const CategoryCard = ({ name_en, name_ru, image_src, id }) => {
//   const navigate = useNavigate()
//   const { mutate } = useCategoryDelete(id)

//   const categoryDelete = (id) => {
//     mutate(id, {
//       onSuccess: () => {
//         toast.success('Sizning malumotingiz o"chirilmoqda');
//       }
//     })
//   }

//   return (
//     <div className='w-full  text-center    '>
//       <ToastContainer />

//       <div className=''>
//         <div className='flex  gap-20 w-[100%] border border-gray-500 '>
//           <h1 className=' w-[200px] flex items-center justify-center h-auto mt-5 text-lg font-medium'>{name_en}</h1>
//           <h1 className=' w-[200px]  flex items-center justify-center  mt-5 text-lg font-medium'>{name_ru}</h1>
//           <div className=' w-[200px] flex items-center justify-center py-3'>
//             <img className=' w-[120px]  h-[120px] ' src={`https://realauto.limsa.uz/api/uploads/images/${image_src}`} alt="img_src" />
//           </div>
//           <button className='py-4 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-red-500 mt-12 px-10 h-[60px] bg-red-500' onClick={() => categoryDelete(id)}>delete</button>
//           <button className='py-4 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-slate-500 mt-12 px-10 h-[60px] bg-slate-500 ml-7' onClick={() => navigate(`/category-edit/${id}`)} >edit</button>
//         </div>
//       </div>
//     </div>
//   )
// }















