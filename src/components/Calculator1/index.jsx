import React from "react";

export class Calculator1 extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue1: 10,
            inputValue2: 10,
            result: 0
        }
    }

    onin1 = (e) => {
        this.setState(() => ({inputValue1: parseInt(e.target.value)}))
    }
    onin2 = (e) => {
        this.setState(() => ({inputValue2: parseInt(e.target.value)}))
    }
    onPlus = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) + parseInt(this.state.inputValue2)}))
    }
    onMinus = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) - parseInt(this.state.inputValue2)}))
    }
    onUmnojia = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) * parseInt(this.state.inputValue2)}))
    }
    onDeleniy = () => {
        this.setState(() => ({result: parseInt(this.state.inputValue1) / parseInt(this.state.inputValue2)}))
    }

    render() {
        return <div className="wrapCalc">
            <h1>Calculator1</h1>
            <input type="number" defaultValue={this.state.inputValue1} onChange={this.onin1}/>
            <div className="btn-wrap">
                <button onClick={this.onPlus}>+</button>
                <button onClick={this.onMinus}>-</button>
                <button onClick={this.onUmnojia}>*</button>
                <button onClick={this.onDeleniy}>/</button>
            </div>
            <input type="number" defaultValue={this.state.inputValue2} onChange={this.onin2}/>    
            <h1>sum: {this.state.result}</h1>
        </div>
    }
}