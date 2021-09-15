import { Route, Redirect } from 'react-router-dom';

import { isLogin } from '@api/login';

const PrivateRoute = ({ login, component: Component, isPrivate, ...rest }) => {
    return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
