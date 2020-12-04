import { withRouter } from 'react-router-dom'

const ServerError = () => {
    return (
        <p>500: Internal error</p>
    );
}

export default withRouter(ServerError);