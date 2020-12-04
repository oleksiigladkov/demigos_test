import { withRouter } from 'react-router-dom';
import Header from './Header';

const Layout = (props) => {
    return (
        <div className="app">
            <div className="wrapper">
                <Header />
                <div className="page">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Layout)
