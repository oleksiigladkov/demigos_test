import * as React from '';
import { withRouter } from 'react-router-dom';
import Overlay from '../Layout/Overlay';
import Rules from './Rules';

const RulesInModal = () => {
    return (
        <React.Fragment>
            <Overlay />
            <Rules />
        </React.Fragment>
    );
}

export default withRouter(RulesInModal);