import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useCreateModels = () => {
  return useMutation({
    mutationFn: async (data) => await    request.post("/models", data).then((res) => res.data)
  })
}
