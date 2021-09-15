import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '@page/App/PrivateRoute';
import PublicRoute from '@page/App/PublicRoute';
import { routes } from '@route';

const Router = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                {routes.map((row, index) => {
                    return row.restricted ? (
                        <PublicRoute
                            key={row.name}
                            restricted={row.restricted}
                            component={row.component}
                            path={row.path}
                            exact={row.exact}
                        />
                    ) : (
                        <PrivateRoute key={index} component={row.component} path={row.path} exact={row.exact} />
                    );
                })}
            </Switch>
        </Suspense>
    );
};

export default Router;
