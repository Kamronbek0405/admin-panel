import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useLocationDelete = () => {
    const client = useQueryClient()
  return useMutation({
    mutationFn: () => request.delete(`/locations/${id}`).then((res) => res.data),
    onSuccess: () => {
        client.invalidateQueries(['locations'])
    }
  })
}
