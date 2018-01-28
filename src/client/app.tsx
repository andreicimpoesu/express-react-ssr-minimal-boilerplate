import React from "react";

class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            toggledWorld: false,
            toggledCitizen: false
        }
    }

    handleHelloWorldClick = () => {
        this.setState(prevState => ({
            toggledWorld: !prevState.toggledWorld
        }));
    }

    handleHelloCitizenClick = () => {
        this.setState(prevState => ({
            toggledCitizen: !prevState.toggledCitizen
        }));
    } 

    render() {

        return (
            <div>
                {this.state.toggledWorld ?<h3>Hello World</h3> : null}
                <button onClick={this.handleHelloWorldClick}>Click!</button>    

                {this.state.toggledCitizen ?<h3>Hello Citizen</h3> : null}
                <button onClick={this.handleHelloCitizenClick}>Click again!</button>                       
            </div>
        );
    }
};

export default App;