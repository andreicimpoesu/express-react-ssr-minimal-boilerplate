import * as React from 'react';
import * as ReactDom from 'react-dom';

const App = () => {
    return (
        <h2>hello world</h2>
    )
};

ReactDom.render(<App />, document.getElementById('app'));