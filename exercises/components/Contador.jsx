import { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  render() {
    return (
      <div>
        <h1>Contador usando classes</h1>
        <h3>{this.state.numero}</h3>
        <input
          type="number"
          min={1}
          max={1000}
          draggable
          value={this.state.passo}
          onChange={(e) => this.setState({ passo: +e.target.value })}
        />
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
