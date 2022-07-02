import React from 'react';


class Arrow extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div><div className="arrow" style={this.props}></div>
        </div>;
    }
}

class Ballon extends React.Component {
    constructor() {
        super();

    }
    render() {
        return <div><div className="ballon" style={this.props}></div></div>;
    }
}


class Box extends React.Component {
    constructor() {
        super();
        this.state = { top: 270, left: 192};
        window.addEventListener('keydown', (event) => {
            if (event.code == "Enter") {
                var interval = setInterval(() => {
                    this.setState({ left: this.state.left + 5 });
                    if(this.state.left>800 && this.state.top>300 && this.state.top<350){
                        this.setState({left: 192 });
                        this.setState({color1:"green",color2:"red",color3:"red"});
                        clearInterval(interval);
                    }
                    
                    if(this.state.left> 900 && this.state.top>350 && this.state.top<400){
                        this.setState({left: 192 });
                        this.setState({color2:"green",color1:"red",color3:"red"});
                        clearInterval(interval);
                    }
                    if(this.state.left> 750 && this.state.top>500 && this.state.top<550){
                        this.setState({left: 192 });
                        this.setState({color3:"green",color1:"red",color2:"red"});
                        clearInterval(interval);
                    }
                    if (this.state.left > 1200) {
                        this.setState({left: 192 });
                        clearInterval(interval);
                    }
                }, 40);
            }
            if (event.code == "ArrowDown") this.setState({ top: this.state.top + 1 });
            if (event.code == "ArrowUp") this.setState({ top: this.state.top - 1 });
            //alert(this.state.top+" "+this.state.left);
        });
        //window.addEventListener('keyup', (event) => {this.setState({top:this.state.top-1});});
    }
    render() {
        const top1 = this.state.top + "px";
        const left1 = this.state.left + "px";
        return <div><div className="box">
            <Arrow top={top1} left={left1} />
            <Ballon left="800px" top="300px" border-color={this.state.color1}/>
            <Ballon left="900px" top="350px" border-color={this.state.color2}/>
            <Ballon left="750px" top="500px" border-color={this.state.color3}/></div>
        </div>;
    }
}

export default Box;