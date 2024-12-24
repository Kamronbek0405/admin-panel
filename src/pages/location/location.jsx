import React from 'react'
import { useGetLocation } from './service/query/useGetLocation'
import { LocationCard } from '../../components/location-componts/location-card'
import { LocationForm } from '../../components/location-componts/location-form'

export const Location = () => {
    const {data} = useGetLocation()
    console.log(data);
   
  return (
    <div>
        <LocationForm/>
        {data?.data?.map((item) => <LocationCard key={item.id} {...item}/> )}
    </div>
  )
}
