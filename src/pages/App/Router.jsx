import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '@page/App/PrivateRoute';
import PublicRoute from '@page/App/PublicRoute';
import { routes } from '@route';

const Router = (props) => {
    const { setShowMainPage } = props;
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <PublicRoute
                    restricted={true}
                    setShowMainPage={setShowMainPage}
                    component={lazy(() =>
                        import(/*webpackChunkName:"LoginPage"*/ /*webpackMode:"lazy"*/ '@page/default/Login')
                    )}
                    path="/login"
                    exact
                />
                <PublicRoute
                    component={lazy(() =>
                        import(/*webpackChunkName:"RegisterPage"*/ /*webpackMode:"lazy"*/ '@page/default/Register')
                    )}
                    path="/register"
                    exact
                />

                <PrivateRoute
                    component={lazy(() =>
                        import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')
                    )}
                    path="/"
                    isPrivate={true}
                    exact
                />
                <PrivateRoute
                    component={lazy(() =>
                        import(/*webpackChunkName:"User"*/ /*webpackMode:"lazy"*/ '@page/default/User')
                    )}
                    path="/user"
                    isPrivate={true}
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
