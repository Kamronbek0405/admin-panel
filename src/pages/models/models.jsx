import React, { useState } from 'react';
import { useGetModels } from './service/query/useGetModels';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Button from '../../components/ui/button/button';
import { AddIcon } from '../../icon/add-icon';
import { Link, useNavigate } from 'react-router-dom';
import { ModelsCard } from '../../components/models-component/models-card';

export const Models = () => {
  const { data, isLoading } = useGetModels();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    navigate("/models-form")
  }


  return (
    <div>

      {isLoading ? (
        <Skeleton count={20} />
      ) : (
        <div className="relative">


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
                <div key={item.id}>
                  {!isModalOpen && (
                    <Button onClick={handleClick} className={"absolute -bottom-20 flex gap-2 items-center bg-green-500 py-4 px-5 rounded-xl hover:bg-opacity-80 font-medium"} startIcon={<AddIcon />} >
                      add information
                    </Button>
                  )}
                  <ModelsCard key={item.id} {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
