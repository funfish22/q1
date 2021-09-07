import styled from 'styled-components';

const Alert = (props) => {
    const { className, children } = props;

    return <AlertRoot className={className}>{children}</AlertRoot>;
};

export default Alert;

const AlertRoot = styled.div`
    position: fixed;
    padding: 12px 20px;
    background: #fff;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #f00;
`;
