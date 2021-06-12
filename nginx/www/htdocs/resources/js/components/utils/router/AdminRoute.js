import React from 'react';
import { Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            component={(props)=> (<Component {...props} />)}
        />
    );
};