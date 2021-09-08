import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = (props) => {
    const { title, href, icon } = props;

    return (
        <ListRoot>
            <IconRoot>
                <Icon icon={icon} size="2x" />
            </IconRoot>
            <Link to={href}>{title}</Link>
        </ListRoot>
    );
};

export default List;

const ListRoot = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const IconRoot = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;
