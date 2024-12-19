import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useCategoryEdit = (id) => {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (data) => request.put(`/categories/${id}`, data).then((res) => res.data),
    onSuccess:() => {
      client.invalidateQueries(["categoryEdit"])
    }
  })
}
