import React, { useEffect } from 'react';
import {
    Route,
    Switch,
    useHistory
} from "react-router-dom";

import DashboardView from './DashboardView'
import Home from './Home'
import RedirectHandler from '../components/RedirectHandler'
import styled from 'styled-components'
import useSessionStatus from '../hooks/useSessionStatus'

const backgroundColor = `#263E4A`

const RootView = styled.div`
    background: ${backgroundColor};
`

export default function Root() {
  const [sessionIsAlive] = useSessionStatus()
  const history = useHistory()

  useEffect(()=>{
     if(sessionIsAlive === false){
        history.push('/')
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionIsAlive])

    return (
        <RootView>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={DashboardView} />
                <Route path="/redirect" component={RedirectHandler} />
            </Switch>
        </RootView>
    )
}