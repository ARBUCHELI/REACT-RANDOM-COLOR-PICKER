import React, {Component} from 'react';
import Button from './Button.js';


class Random extends Component {
    constructor(props){
        super(props)
        this.state = { 
            color: [146, 168, 209]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.applyColor();
    }
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }
    formatColor(ary) {
        return 'RGB(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }
   
    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }
   
    handleClick(){
        this.setState({ 
          color: this.chooseColor()
        });
      }

    render(){
        return(
            <div style={{marginTop: "200px"}}>
                <h1 style={{marginBottom: "100px", fontSize: "6em", fontFamily: "Impact", textAlign: "center"}} className={this.isLight() ? 'gray' : 'purple'}>
                    {this.formatColor(this.state.color)}
                </h1>
                <Button onClick={this.handleClick} light={this.isLight()}/>
            </div>
        )
    }
}

export default Random;