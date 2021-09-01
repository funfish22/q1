import styled from 'styled-components';

const Title = (props) => {
    const { className, children } = props;

    return <p className={className}>{children}</p>;
};

export default Title;
