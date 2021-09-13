import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '@page/App/PrivateRoute';
import PublicRoute from '@page/App/PublicRoute';
import { routes } from '@route';

const Router = (props) => {
    const { login, setShowMainPage } = props;
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <PublicRoute
                    restricted={true}
                    login={login}
                    setShowMainPage={setShowMainPage}
                    component={lazy(() =>
                        import(/*webpackChunkName:"LoginPage"*/ /*webpackMode:"lazy"*/ '@page/default/Login')
                    )}
                    path="/"
                    exact
                />
                <PublicRoute
                    restricted={true}
                    login={login}
                    component={lazy(() =>
                        import(/*webpackChunkName:"RegisterPage"*/ /*webpackMode:"lazy"*/ '@page/default/Register')
                    )}
                    path="/register"
                    exact
                />

                <PrivateRoute
                    login={login}
                    component={lazy(() =>
                        import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')
                    )}
                    path="/home"
                    exact
                />
                {/* {routes.map((row, index) => (
                    <Route key={index} path={row.path} exact={row.exact} component={row.component}></Route>
                ))} */}
            </Switch>
        </Suspense>
    );
};

export default Router;
