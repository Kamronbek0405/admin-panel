import React from 'react'
import { useGetCars } from './service/query/useGetCars'

export const Cars = () => {
  const {data, isLoading} = useGetCars()

  return (
    <div></div>
  )
}
