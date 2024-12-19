import React, { useState } from 'react';
import { useGetCategory } from './service/query/useGetCategory';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CategoryCard } from '../../components/category-card';
import Button from '../../components/ui/button/button';
import { AddIcon } from '../../icon/add-icon';
import {  Link, useNavigate } from 'react-router-dom';

export const Category = () => {
  const { data, isLoading } = useGetCategory();
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate() 
  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);  
  };
  const handleClick = () => {
    navigate('/category-form'); 
};

  return (
    <div>
      {isLoading ? (
        <Skeleton count={20} />
      ) : (
        <div className="relative">
          {!isModalOpen && (
            <Button onClick={handleClick}  className={"absolute -bottom-20 flex justify-center  gap-2 items-center bg-green-500 w-[200px] h-[60px] rounded-xl hover:bg-opacity-80 font-medium"} startIcon={<AddIcon />} > 
             <Link to={""}> add information</Link>
            </Button>
          )}
          
          <div className=''>
            <div className="flex w-[100%] bg-slate-700 gap-[160px] px-12">
                  <strong className=" text-white px-4 py-6">Name (EN)</strong>
                  <strong className=" text-white px-4 py-6">Name (RU)</strong>
                  <strong className=" text-white px-4 py-6">Images</strong>
                  <strong className=" text-white px-4 py-6">Delete</strong>
                  <strong className=" text-white px-4 py-6">Editing</strong>
                
                </div>
            <div className='overflow-y-auto border-y-2 border-gray-500  h-[76vh]'>
              {data?.data?.map((item) => (
                <CategoryCard key={item.id} {...item} />
              ))}
            </div>
            </div>
        </div>
      )}
    </div>
  );
};
