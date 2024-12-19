import React from 'react'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { loadState } from '../../config/storage'
import { Header } from '../header'
import { CategoryIcon } from '../../icon/category-icon'



export const MainLayout = () => {
  const user = loadState("user")
  if(!user) return <Navigate to={"/login"} />
  return (
    <div >
      <div className='max-w-[1520px] w-[100%] h-[90px] bg-bground '>
        <Header/>
      </div>
       <div className='flex'>
       <div className='w-[15%] bg-bground h-[100vh] flex flex-col items-center py-20 gap-10 text-xl text-white font-medium'>
          <div className='w-full flex items-center justify-center'>
            {/* <CategoryIcon/> */}
            <NavLink 
            to={"/"} 
            className={({ isActive }) => 
              isActive ? "bg-bgactive w-[100%] py-3 flex items-center justify-center" : ""
            }
          >
            Category
          </NavLink>
          </div>
          <NavLink 
            to={"/brands"} 
            className={({ isActive }) => 
              isActive ? "bg-bgactive w-[100%] py-3 flex items-center justify-center" : ""
            }
          >
            Brands
          </NavLink>
          <NavLink 
            to={"/cars"} 
            className={({ isActive }) => 
              isActive ? "bg-bgactive w-[100%] py-3 flex items-center justify-center" : ""
            }
          >
            Cars
          </NavLink>
          <NavLink 
            to={"/models"} 
            className={({ isActive }) => 
              isActive ? "bg-bgactive w-[100%] py-3 flex items-center justify-center" : ""
            }
          >
            Models
          </NavLink>
          <NavLink 
            to={"/login"} 
            className={({ isActive }) => 
              isActive ? "bg-bgactive w-[100%] py-3 flex items-center justify-center" : ""
            }
          >
            Login
          </NavLink>
        </div>
        <div className='w-[85%] p-5'>
            <Outlet/>
        </div>
       </div>
    </div>
  )
}
