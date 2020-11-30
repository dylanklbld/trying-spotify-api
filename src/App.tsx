import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import React, { useEffect } from 'react';

import {
  BrowserRouter
} from "react-router-dom";
import RootView from './views/RootView'

function App() {
  const queryCache = new QueryCache()
 
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <RootView/>
      </BrowserRouter>
    </ReactQueryCacheProvider>
  );
}

export default App;
