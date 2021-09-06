import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Title from '@components/atoms/Title';
import Model from '@components/atoms/Model';
import Button from '@components/atoms/Button';
import Input from '@components/molecules/Input';

import { register } from '@api/register';

const Register = () => {
    const history = useHistory();
    const [account, setAccount] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    console.log('history123', history);

    const handleRegister = async () => {
        const res = await register(account, password);
        if (res.status === 200) {
            history.push('/login');
        }
    };

    const handleChangeAccount = (e) => {
        setAccount(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <RegisterPageRoot>
            <ModelRoot maxWidth={600}>
                <TitleRoot>註冊</TitleRoot>
                <RegisterFormRoot>
                    <Input title="帳號" value={account} onChange={handleChangeAccount} />
                    <Input title="密碼" type="password" value={password} onChange={handleChangePassword} />
                    <Input
                        title="確認密碼"
                        type="password"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                    />
                    <Button name="註冊" onClick={handleRegister} />
                </RegisterFormRoot>
                <LoginText>
                    <Link to="/login">返回登入</Link>
                </LoginText>
            </ModelRoot>
        </RegisterPageRoot>
    );
};

export default Register;

const RegisterPageRoot = styled.div`
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

const RegisterFormRoot = styled.form``;

const LoginText = styled.p`
    text-align: right;
    margin-top: 20px;

    a:hover {
        color: #4285f4;
    }
`;
