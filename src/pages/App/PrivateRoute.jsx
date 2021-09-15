import { Route, Redirect } from 'react-router-dom';
import Header from '@components/organisms/Header';

import { isLogin } from '@api/login';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() ? (
                    <>
                        <Header />
                        <Component {...props} />
                    </>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
