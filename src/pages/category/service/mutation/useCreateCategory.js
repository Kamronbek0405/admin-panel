import { useMutation, useQueryClient } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useCreateCategory = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const response = await request.post("/categories", data)
      return response.data
    },
    onSuccess: () => {
      client.invalidateQueries(['category'])
    },
  })
}
