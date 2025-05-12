'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Alerts } from './Alerts'

export const CommonAlert = () => {
  const errorApi = useSelector(selectAppError)
  const dispatch = useDispatch()

  return (
    <>
      {errorApi && (
        <Alerts
          autoClose
          closeFn={() => {
            dispatch(setAppError({ error: null }))
          }}
          delay={3000}
          message={errorApi}
          type={'error'}
        />
      )}
    </>
  )
}
