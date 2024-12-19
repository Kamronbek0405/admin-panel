import {  useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetEdit = (id) => {
  return useQuery({
    queryKey: ["categoryEdit", id],
    queryFn:() => request.get(`/categories/${id}`).then((res) => res.data)
   })
}
