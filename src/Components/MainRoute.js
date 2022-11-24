import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Categories from './Categories';




const MainRoute = () => {
return (
    <>
        <Switch>
            <Route path='/categories' exact component={Categories}/>
        </Switch>
    </>
)
}

export default MainRoute