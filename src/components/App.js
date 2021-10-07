import React from 'react';
import '../style/tailwind.css';
import Signup from './Signup';
import { AuthProvider } from "../context/AuthContext.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard.js"
import Login from "./Login.js"
import PrivateRoute from './PrivateRoute';
import Beitrag from './Beitrag';
import Profil from './Profil';



function App() {
    
return (
    <Router>
        <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/beitrag" component={Beitrag} />
                <Route path="/profil" component={Profil} />
            </Switch>
        </AuthProvider>
    </Router>

)
}

export default App;