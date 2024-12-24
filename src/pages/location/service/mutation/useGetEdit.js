import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetEdit = (id) => {
  return useQuery({
    queryKey: ["locations-edit", id],
    queryFn: () => request.get(`/locations/${id}`).then((res) => res.data)
  })
}
