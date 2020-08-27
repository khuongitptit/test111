import React from 'react'
import Menu from './Menu'
import routes from './routes'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'
function App() {
    const mapRoutes = routes => {
        return routes.map(route => {
            return (
                <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            )
        })
    }
    return (
        <div className='app'>
            <BrowserRouter>
                <Menu />
                <Switch>{mapRoutes(routes)}</Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
