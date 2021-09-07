import Title from '../../atoms/Title';
import styled from 'styled-components';

const Input = (props) => {
    const { title = 'text', type, value, onChange, placeholder = '', warningText = '' } = props;
    return (
        <LabelRoot>
            <TitleRoot>{title}</TitleRoot>
            <InputRoot type={type} value={value} onChange={onChange} placeholder={placeholder} />
            {!!warningText && <Warning>{warningText}</Warning>}
        </LabelRoot>
    );
};

export default Input;

const LabelRoot = styled.label`
    display: block;
    margin-bottom: 30px;
    position: relative;
`;

const TitleRoot = styled(Title)`
    color: #00000099;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const InputRoot = styled.input`
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 500;
    padding: 12px 20px;
    border: none;
    outline: none;
`;

const Warning = styled.p`
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 14px;
    margin-top: 5px;
    color: #f00;
`;
