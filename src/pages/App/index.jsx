import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Router from './Router';

import { authentication } from '@api/login';

const AppPage = () => {
    const history = useHistory();

    const fetchData = async () => {
        let token = JSON.parse(localStorage.getItem('__mock_token__'));
        const result = await authentication(token);

        if (result.status === 403) {
            history.push('/login');
        }
    };

    useEffect(() => {
        fetchData();
    });

    return <Router />;
};

export default AppPage;
