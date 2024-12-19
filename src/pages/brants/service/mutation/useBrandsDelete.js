import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useBrandsDelete = (id) => {
   const client = useQueryClient()
  return useMutation({
    mutationFn: async () => await request.delete(`/brands/${id}`).then((res) => res.data),
    onSuccess:()=> {
        client.invalidateQueries(["brands"])
    }
  })
}
