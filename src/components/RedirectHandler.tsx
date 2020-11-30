import React, { useEffect } from 'react'

import {getHashParameters} from '../helpers/getHashParameters'
import localStorage from '../utils/localStorage'
import { useHistory } from 'react-router-dom';

type Props = {
    location?: any,
}

const defaultUrlPath = '/'
const dashboardUrlPath = '/dashboard'

export const apiParametersStorageKey = 'parameters'
export const expiryTimeStorageKey = 'expiry-time'

function RedirectHanlder({ location }: Props): React.ReactElement {
    const history = useHistory();

    useEffect(() => {
        try {
            const extractedParams = getHashParameters(location?.hash) 
            const expiryTime = new Date().getTime() + extractedParams['expires_in'] * 1000;
            
            localStorage.setItem(apiParametersStorageKey, JSON.stringify(extractedParams))
            localStorage.setItem(expiryTimeStorageKey, expiryTime)
            
            history.push(dashboardUrlPath)
        } catch (error) {
            history.push(defaultUrlPath)
        }
    }, [])

    return <div>Redirecting</div>
}

export default RedirectHanlder