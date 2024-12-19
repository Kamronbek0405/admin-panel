import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useCreateBrand = () => {
    const client = useQueryClient()
  return useMutation({
    mutationFn:(data) => request.post("/brands", data).then((res) => res.data),
    onSuccess:() => {
        client.invalidateQueries(["brands"])
    }
  })
}
