import * as express from 'express';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactDomServer from 'react-dom/server';


const App = express();

App.get('/', (req, res) => {
    res.send(foo);
});

App.listen(8000, () => {
    console.log('server started on: 8000');
});



class Rct extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            tooggled: false
        };
    }
    toggle = () => {
        this.setState({
            tooggled: !this.state.tooggled
        })
    }
    render() {
        return (
            <div>
                {this.state.tooggled ? <h1>hello</h1> : ''}
                <button onClick={this.toggle}>click</button>
            </div>
        );
    }
}

const foo = ReactDomServer.renderToString(<Rct />);

console.log(foo);

