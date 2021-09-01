import styled, { css } from 'styled-components';

const Button = (props) => {
    const { type = 'primary', name } = props;

    return <ButtonRoot type={type}>{name}</ButtonRoot>;
};

export default Button;

const ButtonRoot = styled.div`
    ${(props) =>
        props.type === 'primary' &&
        css`
            background: #4285f4;
        `}
    border-radius: 4px;
    padding: 12px 20px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
`;
