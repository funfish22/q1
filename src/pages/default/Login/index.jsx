import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Title from '@components/atoms/Title';
import Alert from '@components/atoms/Alert';
import Model from '@components/atoms/Model';
import Button from '@components/atoms/Button';
import Input from '@components/molecules/Input';

import { login } from '@api/login';

const LoginPage = () => {
    const history = useHistory();
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await login(account, password);
        if (result.status === 200) {
            history.push('/');
        }
        if (result.status === 500) {
            setAlert(true);
            setAlertText(result.data.message);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    };

    const handleChangeAccount = (e) => {
        setAccount(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <LoginPageRoot>
            {alert && <Alert>{alertText}</Alert>}
            <ModelRoot maxWidth={600}>
                <TitleRoot>登入</TitleRoot>
                <LoginFormRoot>
                    <Input title="帳號" value={account} onChange={handleChangeAccount} />
                    <Input title="密碼" type="password" value={password} onChange={handleChangePassword} />
                    <Button name="登入" onClick={handleLogin} />
                </LoginFormRoot>
                <RegisterText>
                    還沒有帳號嗎? <Link to="/register">點擊註冊</Link>
                </RegisterText>
            </ModelRoot>
        </LoginPageRoot>
    );
};

export default LoginPage;

const LoginPageRoot = styled.div`
    background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModelRoot = styled(Model)`
    padding: 60px;
`;

const TitleRoot = styled(Title)`
    font-size: 24px;
    font-weight: 700;
    color: #4285f4;
    margin-bottom: 40px;
`;

const LoginFormRoot = styled.form``;

const RegisterText = styled.p`
    text-align: right;
    margin-top: 20px;

    a:hover {
        color: #4285f4;
    }
`;
