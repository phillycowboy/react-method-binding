import React, { Component } from 'react'


class ButtonList extends Component{
    static defaultProps = {
        colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
    }

    changeColor = (color) => {

    }

    render(){
        return(
            <div className="ButtonList">
                {this.props.colors.map(c => {
                    const colorObj = {backgroundColor: c};
                    return <button style={colorObj}>Click on me!</button>
                })}
            
            </div>
        )
    }
}
export default ButtonList