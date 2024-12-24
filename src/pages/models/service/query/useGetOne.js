import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetOne = () => {
  return useQuery({
    queryKey: ["modelsBrends"],
    queryFn: () => request.get(`/brands`).then((res) => res.data)
  })
}
