import { withRouter, Link } from 'react-router-dom';
import logo from './img/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <Link className="logo"to="/">
                <img className="logo" src={logo} alt="" />
            </Link>
            <div className="links">
                <Link to="/index">Index</Link>
                <Link to="/rules">Rules</Link>
                {/* <Link to="/rulesInModal">Rules (modal)</Link> */}
            </div>
        </header>
    )
}

export default withRouter(Header);
