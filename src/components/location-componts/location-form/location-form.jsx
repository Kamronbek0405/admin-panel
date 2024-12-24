import React from 'react';
import { Input } from '../../ui/input';
import { useForm } from 'react-hook-form';
import Button from '../../ui/button/button';
import { useCreateLocation } from '../../../pages/location/service/mutation/useCreateLocation';
import { useNavigate } from 'react-router-dom';

export const LocationForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useCreateLocation();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data); // data obyektini tekshiring

    const formData = new FormData();

    // Yuboriladigan ma'lumotlarni qo'shish
    formData.append('created_at', data.created_at);
    formData.append('slug', data.slug);
    formData.append('text', data.text);
    formData.append('name', data.name);
    
    // Faylni qo'shish, agar fayl mavjud bo'lsa
    if (data.image_src && data.image_src[0]) {
      formData.append('images', data.image_src[0]);
    }

    // formData ma'lumotlarini tekshirish
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // Mutatsiya yuborish
    mutate(formData, {
      onSuccess: (responseData) => {
        console.log("done", responseData); // responseData ni tekshirish
        // boshqa amallar
      },
    });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
        <Input name="created_at" register={register} type="text" placeholder="created time" />
        <Input name="slug" register={register} type="text" placeholder="slug" />
        <Input name="text" register={register} type="text" placeholder="text" />
        <Input name="name" register={register} type="text" placeholder="name" />
        <Input name="image_src" register={register} type="file" placeholder="img" />
        <Button type="submit">send</Button>
      </form>
    </div>
  );
};
