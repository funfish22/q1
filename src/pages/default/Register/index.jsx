import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Title from '@components/atoms/Title';
import Model from '@components/atoms/Model';
import Alert from '@components/atoms/Alert';
import Button from '@components/atoms/Button';
import Input from '@components/molecules/Input';

import { register } from '@api/register';

const Register = () => {
    const history = useHistory();
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [account, setAccount] = useState(null);
    const [accountInfo, setAccountInfo] = useState('');
    const [password, setPassword] = useState(null);
    const [passwordInfo, setPasswordInfo] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [confirmPasswordInfo, setConfirmPasswordInfo] = useState('');

    console.log('history123', history);

    const handleRegister = async () => {
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(account)) {
            setAccountInfo('帳號格式錯誤');
        } else {
            setAccountInfo('');
        }
        if (!/^[A-z]\d{2,6}[A-z]$/.test(password)) {
            setPasswordInfo('密碼格式錯誤');
        } else {
            setPasswordInfo('');
        }
        if (password !== confirmPassword) {
            setConfirmPasswordInfo('與密碼不同');
        } else {
            setConfirmPasswordInfo('');
        }

        const res = await register(account, password);

        if (res.status === 200) {
            history.push('/');
        }
        if (res.status === 500) {
            setAlert(true);
            setAlertText(res.data.message);
            if (res.data.message === '該用戶已存在') {
                setAccount('');
                setPassword('');
                setConfirmPassword('');
            }
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

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <RegisterPageRoot>
            {alert && <Alert>{alertText}</Alert>}
            <ModelRoot maxWidth={600}>
                <TitleRoot>註冊</TitleRoot>
                <RegisterFormRoot>
                    <Input
                        title="帳號"
                        value={account}
                        placeholder="必須是信箱"
                        onChange={handleChangeAccount}
                        warningText={accountInfo}
                    />
                    <Input
                        title="密碼"
                        type="password"
                        value={password}
                        placeholder="4-8字元;首位必須是英文;中間必須是數字"
                        onChange={handleChangePassword}
                        warningText={passwordInfo}
                    />
                    <Input
                        title="確認密碼"
                        type="password"
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        placeholder="4-8字元;首位必須是英文;中間必須是數字"
                        warningText={confirmPasswordInfo}
                    />
                    <Button name="註冊" onClick={handleRegister} />
                </RegisterFormRoot>
                <LoginText>
                    <Link to="/">返回登入</Link>
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
