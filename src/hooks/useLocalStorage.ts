import React from 'react'
import storage from '../utils/localStorage'

export default function useLocalStorage(key:string):any {
  const [value, setValue] = React.useState<any>()

  React.useEffect(() => {
    setValue(storage.getItem(key))
  }, [key])

  return value
}
