import { useState } from 'react';
import Router from './Router';

import { authentication } from '@api/login';

const AppPage = () => {
    const [showMainPage, setShowMainPage] = useState(false);

    return (
        <>
            <Router authentication={authentication} login={showMainPage} setShowMainPage={setShowMainPage} />
        </>
    );
};

export default AppPage;
