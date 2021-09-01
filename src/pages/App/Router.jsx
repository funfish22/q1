import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '@route';

const Router = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                {routes.map((row, index) => (
                    <Route key={index} path={row.path} exact={row.exact} component={row.component}></Route>
                ))}
            </Switch>
        </Suspense>
    );
};

export default Router;
