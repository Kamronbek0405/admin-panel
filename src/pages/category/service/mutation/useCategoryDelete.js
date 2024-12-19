import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useCategoryDelete = (id) => {
    const client = useQueryClient()
  return useMutation({
    mutationFn: (id) => request.delete(`/categories/${id}`).then((res) => res.data),
    onSuccess:()=> {
        client.invalidateQueries(["category"])
    }

  })
}
