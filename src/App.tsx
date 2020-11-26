import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from "react-router-dom";
import React, { useEffect } from 'react';

import Home from './views/Home'
import RedirectHandlerPage from './views/RedirectHandlerPage'
import ReleasedThisWeekView from './views/ThisWeekReleases'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/redirect" component={RedirectHandlerPage} />
          <Route path="/dashboard" component={ReleasedThisWeekView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
