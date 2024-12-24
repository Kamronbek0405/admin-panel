import React, { useState } from 'react';
import { useGetBrands } from './service/query/useGetBrands';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrandCard } from '../../components/brand-card';
import Button from '../../components/ui/button/button';
import { AddIcon } from '../../icon/add-icon';
import {  Link, useNavigate } from 'react-router-dom';

export const Brands = () => {
  const { data, isLoading } = useGetBrands();
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const navigate = useNavigate()


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);  
  };
  const handleClick = () => {
    navigate('/brands-form'); 
};
 

  return (
    <div>
      {isLoading ? (
        <Skeleton count={20} />
      ) : (
        <div className="relative">
          {!isModalOpen && (
            <Button onClick={handleClick} className={"absolute -bottom-20 flex justify-center  gap-2 items-center bg-green-500 w-[200px] h-[60px] rounded-xl hover:bg-opacity-80 font-medium"} startIcon={<AddIcon />} > 
            add information
            </Button>
          )}
          
          <div className=''>
            
            <div className='overflow-y-auto gap-12 flex flex-wrap h-[85vh] py-5'>
              {data?.data?.map((item) => (
                <BrandCard key={item.id} {...item} />
              ))}
            </div>
            </div>
        </div>
      )}
    </div>
  );
};
