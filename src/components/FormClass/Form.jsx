import { Component } from 'react';
import { Button } from './Button';
import { Input } from './input';

export class Form extends Component {
  state = {
    visible: true,
    count: 0,
    name: 'click',
  };
  componentDidMount() {
    console.log('did mount Form');
  }
  handleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleChangeName = (ev) => {
    this.setState({
      name: ev.target.value,
    });
  };
  render() {
    return (
      <div className="lesson-three">
        <p> Урок 3. Class component</p>
        <button onClick={this.handleVisible}>
          {this.state.visible ? 'hide' : 'show'}
        </button>
        {this.state.visible && <Button name={this.state.count} />}
        <br />
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handleChangeName} />
      </div>
    );
  }
}
