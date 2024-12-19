import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useModelsDelete = (id) => {
    const client = useQueryClient()
  return useMutation({
    mutationFn: () => request.delete(`/models${id}`).then((res) => res.data),
    onSuccess:() => {
        client.invalidateQueries(["models"])
    }
  })
}
