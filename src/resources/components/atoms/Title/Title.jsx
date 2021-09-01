import styled from 'styled-components';

const Title = (props) => {
    const { className, children } = props;

    return <div className={className}>{children}</div>;
};

export default Title;
