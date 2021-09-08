const Header = (props) => {
    const { show } = props;
    return <header style={{ display: show ? 'block' : 'none' }}>Header</header>;
};

export default Header;
