import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authentication } from '@api/login';

const PublicRoute = ({ component: Component, restricted, setShowMainPage, ...rest }) => {
    useEffect(() => {
        const login = authentication();
        console.log('login', login);
    });
    return (
        <Route
            {...rest}
            render={(props) =>
                authentication().status === 200 && restricted ? (
                    <Redirect to="/home" />
                ) : (
                    <Component setShowMainPage={setShowMainPage} {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
