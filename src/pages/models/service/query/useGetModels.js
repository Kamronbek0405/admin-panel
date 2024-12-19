import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetModels = () => {
  return useQuery({
    queryKey: ["models"],
    queryFn: () => request.get("/models").then((res) => res.data)
  })
}
