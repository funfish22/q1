import { Route, Redirect } from 'react-router-dom';

import { authentication } from '@api/login';

const PrivateRoute = ({ login, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (authentication().status === 200 ? <Component {...props} /> : <Redirect to="/" />)}
        />
    );
};

export default PrivateRoute;
