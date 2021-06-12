import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../navbar/NavBar';

export default function PublicRoute({ component: Component , ...rest}) {
    return (
        <Route {...rest}  component={(props)=>(
            <div className="public-container">
                <NavBar /> {/* NAVBAR ALWAYS VISIBLE */}
                <Component {...props} />
            </div>
        )}
        />
    )
}