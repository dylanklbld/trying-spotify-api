import React, {useState} from 'react'

import { expiryTimeStorageKey } from '../components/RedirectHandler'
import useLocalStorage from './useLocalStorage'

export default function useSessionStatus():any {
  // if explicitly null then not showing 'session expired' warning
  const [isSessionAlive, setIsSessionAlive] = useState<boolean|null>(null)
  const expiryTimeValue = useLocalStorage(expiryTimeStorageKey)

  React.useEffect(() => {
    if(expiryTimeValue){
        const currentTime = new Date().getTime();
        setIsSessionAlive(currentTime < parseInt(expiryTimeValue))
    } 
  }, [expiryTimeValue])

  return [isSessionAlive]
}
