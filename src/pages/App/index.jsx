import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Router from './Router';

import { authentication } from '@api/login';

const AppPage = () => {
    const history = useHistory();
    const [showMainPage, setShowMainPage] = useState(false);

    // const fetchData = async () => {

    //     const result = await authentication(token);

    //     if (result.status === 200) {
    //         console.log('result1111', result);
    //         setShowMainPage(true);
    //     }
    //     if (result.status === 403) {
    //         history.push('/login');
    //         setShowMainPage(false);
    //     }
    // };

    useEffect(() => {
        // fetchData();
    });

    return (
        <>
            <Router authentication={authentication} login={showMainPage} setShowMainPage={setShowMainPage} />
        </>
    );
};

export default AppPage;
