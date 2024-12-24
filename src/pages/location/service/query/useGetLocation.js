import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetLocation = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => request.get("/locations").then((res) => res.data)
  })
}
