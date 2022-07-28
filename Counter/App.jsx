class App extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            count: 0
        }

        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.reset = this.reset.bind(this);

    }

    handleUp() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    handleDown(){
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    reset(){
        this.setState({count: 0})
    }

    render(){

        return (
    
            <div style={{paddingTop: 20}}>
    
                <h1>Counter</h1>
    
                <p style={{color: 'green', fontSize: 80, padding: '10px 0'}}>{this.state.count}</p>

                <OrganizeButtons>
                
                    <Button click={this.handleDown} name="DECREASE" />
                    <Button click={this.reset} name="RESET" />
                    <Button click={this.handleUp} name="INCREASE" />
    
                </OrganizeButtons>

            </div>
    
        );

    }


}

class OrganizeButtons extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return(

            <div style={{display: 'flex', gap: 10}}>

                {this.props.children}

            </div>

        )

    }

}

class Button extends React.Component {

    constructor(props){

        super(props);

    }

    render(){

        const buttonStyle = {
            backgroundColor: 'transparent',
            border: '1px solid #000',
            fontFamily: 'monospace',
            padding: 10,
            borderRadius: 10
        }

        return (

            <button style={buttonStyle} onClick={this.props.click}>{this.props.name}</button>

        )

    }

}

ReactDOM.render(<App />, document.getElementById('root'));