import { useMutation, useQueryClient } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useCreateLocation = () => {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (data) => {
      const response = await request.post("/locations", data)
      return response.data
    },
    onSuccess: () => {
      client.invalidateQueries(['locations'])
    },
  })
}
