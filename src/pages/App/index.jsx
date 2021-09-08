import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Router from './Router';

import { authentication } from '@api/login';

import Header from '@components/organisms/Header';

const AppPage = () => {
    const history = useHistory();
    const [showMainPage, setShowMainPage] = useState(true);

    const fetchData = async () => {
        let token = sessionStorage.getItem('token');
        const result = await authentication(token);

        if (result.status === 200) {
            console.log('result1111', result);
            setShowMainPage(true);
        }
        if (result.status === 403) {
            history.push('/login');
            setShowMainPage(false);
        }
    };

    const handleChangeMenu = () => {
        console.log('123');
    };

    useEffect(() => {
        fetchData();
        console.log('showMainPage', showMainPage);
    });

    return (
        <>
            <Header show={showMainPage} handleChangeMenu={handleChangeMenu} />
            <Router />
        </>
    );
};

export default AppPage;
