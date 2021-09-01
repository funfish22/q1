import styled from 'styled-components';

const Model = (props) => {
    const { className, maxWidth, children } = props;

    return (
        <ModelRoot className={className} maxWidth={maxWidth}>
            {children}
        </ModelRoot>
    );
};

export default Model;

const ModelRoot = styled.div`
    width: ${(props) => props.maxWidth}px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
`;
