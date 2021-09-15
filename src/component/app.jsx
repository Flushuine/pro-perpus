import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <Route path="/" exact>
                <p>Landing page</p>
            </Route>
            <Route path="/activity" exact>
                <p>Activity</p>
            </Route>
            <Route path="/catalog" exact>
                <p>Catalog</p>
            </Route>
            <Route path="/about" exact>
                <p>About</p>
            </Route>
            <Route path="/register" exact>
                <p>Register</p>
            </Route>
        </Router>
    )
}

export default App