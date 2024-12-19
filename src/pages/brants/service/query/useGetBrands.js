import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetBrands = () => {
  
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => request.get("/brands").then((res) => res.data)

  })
}
