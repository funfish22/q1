import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import { authentication } from '@api/login';

const AppPage = () => {
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('__mock_token__'));
        const res = authentication(token);
        console.log('res', res);
        res.then((response) => {
            console.log('response', response);
        }).catch((err) => {
            console.log('err.response.status', err);
        });
    });
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default AppPage;
