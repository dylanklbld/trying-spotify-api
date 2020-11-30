import React, { ReactElement } from 'react'
import {
    Route,
    Switch,
    useRouteMatch,
} from "react-router-dom";

import CategoriesView from './pages/CategoriesView'
import NavBar from '../components/NavBar'
import NewReleasesView from './pages/NewReleasesView'
import PlaylistsView from './pages/PlaylistsView'

const navigationLinks = [
    {
        link:`new-releases`,
        text: "New Releases"
    },{
        link:`featured-playlists`,
        text: "Playlists"
    },{
        link:`categories`,
        text: "Categories"
    }
]


function DashboardView():ReactElement {
    const match = useRouteMatch();
    
    return (
    <div className="dashboard">
        <NavBar links={navigationLinks}/>
        <Switch>
            <Route exact path={[`${match.path}`, `${match.path}/new-releases`]} component={NewReleasesView} />
            <Route exact path={`${match.path}/featured-playlists`} component={PlaylistsView} />
            <Route exact path={`${match.path}/categories`} component={CategoriesView} />
        </Switch>
    </div>)
}

export default DashboardView