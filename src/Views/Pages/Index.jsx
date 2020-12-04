import * as React from 'react';
import { withRouter } from 'react-router-dom';

const Index = () => {

    return (
        <React.Fragment>
            <h1 class="reults">Test task result links</h1>
            <ul>
                <li>GitHub: <a href="https://github.com/oleksiigladkov/demigos_test.git" target="_blank" rel="noreferrer">repo</a></li>    
                <li>Demo: <a href="https://friendly-mirzakhani-fb7bdb.netlify.app/" target="_blank" rel="noreferrer">try it</a></li>       
            </ul>
            <hr />

            <p>The task is to create UI/UX for display rules settings. See following 
                <a href="https://drive.google.com/file/d/1DN973tHF9iHk3naU680QK4wQAhC1nn0q/view" target="_blank" rel="noreferrer">screen recording</a>.
            </p>
            <h1>Requirements</h1>
            <hr />
            <h2>Tech Stack Requirements</h2>
            <ul>
                <li>Use latest React</li>
                <li>Use Redux</li>
                <li>Do not use external css frameworks or plugins (i.e. all styles must be custom)</li>
            </ul>
            <h2>UI/UX Requirements</h2>
            <ul>
                <li>View should look/behave as close to example video as possible for both inclusion & exclusion rules</li>
                <li>Fetch initial inclusion and exclusion rules from the mock json server (use whatever is handy for you)</li>
                <li>Implement inclusion rules | whitelist preset pages (Home, Product) or custom url segments (Contains, Exact Match</li>
                <li>Implement exclusion rules | blacklist preset pages (Home, Product) or custom url segments (Contains, Exact Match)</li>
                <li>New input field should be added after each "+ New Rule" button click</li>
                <li>Input field should be removed on "(X)" button click</li>
                <li>Input field should have form validations on empty inputs</li>
                <li>Use following fonts font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"</li>
            </ul>
            <h2>Submission Requirements:</h2>
            <ul>
                <li>Please create a public Github repo with a fresh React project</li>
                <li>(Nice to have): Please create a live implementation with a public link</li>
            </ul>
        </React.Fragment>
    );
}

export default withRouter(Index);
