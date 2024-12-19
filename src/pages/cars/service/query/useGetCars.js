import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetCars = () => {
  return useQuery({
    queryKey:["cars"],
    queryFn:() => request.get("/cars").then((res) => res.data)
  })
}
