import React, { useEffect, useState } from 'react'

import { History } from 'history';
import { Redirect } from 'react-router';

type Props = {
    history?: History,
    location?: any,
    match?: any,
}

const defaultUrlPath = '\'
const dashboardUrlPath = '\dashboard'

function RedirectPage({ history, location, match }: Props): React.ReactElement {
    const [redirectPath, setRedirectPath] = useState<string>('/');

    useEffect(() => {
        try {
            console.table(match)
        } catch (error) {
            setRedirectToDashboard(false)
        }
    }, [])


    return <Redirect to={redirectPath}/>
}

export default RedirectPage