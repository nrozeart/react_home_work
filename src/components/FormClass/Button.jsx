import { PureComponent } from 'react';

export class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      count: 1,
    };
  }
  componentDidUpdate() {
    console.log('did update');
  }
  componentDidMount() {
    console.log('button did mount');
    // this.interval = setInterval(() => console.log(1), 1000)
  }
  componentWillUnmount() {
    console.log('will unmount');
    clearInterval(this.interval);
  }
  /* shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count !== this.props.count) {
            return true
        }
        return false
    } */
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button
          disabled={this.props.disabled}
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          {' '}
          +1
        </button>
      </>
    );
  }
}
