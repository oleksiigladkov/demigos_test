import { withRouter } from 'react-router-dom'

const NotFound = () => {
    return (
        <p>404: Page not found</p>
    );
}

export default withRouter(NotFound);