import React, {Component} from 'react';


class Button extends Component {

    render(){
        return(
            <button
                style={{fontFamily:"Impact", fontSize: "2em"}}
                className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				REFRESH
            </button>
        )
    };
};


export default Button;