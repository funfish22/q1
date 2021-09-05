import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import { authentication } from '@api/login';

const AppPage = () => {
    async function fetchData() {
        let token = JSON.parse(localStorage.getItem('__mock_token__'));
        const result = await authentication(token);
        console.log('result.data', result);
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default AppPage;
