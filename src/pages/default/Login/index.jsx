import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Title from '@components/atoms/Title';
import Model from '@components/atoms/Model';
import Button from '@components/atoms/Button';
import Input from '@components/molecules/Input';

const LoginPage = () => {
    return (
        <LoginPageRoot>
            <ModelRoot maxWidth={600}>
                <TitleRoot>登入</TitleRoot>
                <LoginFormRoot>
                    <Input title="帳號" />
                    <Input title="密碼" type="password" />
                    <Button name="登入" />
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
