import { Route, Redirect } from 'react-router-dom';

import { isLogin } from '@api/login';

const PublicRoute = ({ component: Component, restricted, setShowMainPage, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() && restricted ? (
                    <Redirect to="/" />
                ) : (
                    <Component setShowMainPage={setShowMainPage} {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
