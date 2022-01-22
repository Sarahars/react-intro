import {Component} from "react";

class ClassCmp extends Component {
  state = {
    count: 0,
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h4>I am {this.props.title}</h4>
        <p>In order to create functional Component you have to use functions</p>
        <div>
          <p>{this.state.count}</p>
          <button
            onClick={() => {
              this.increment();
            }}
          >
            update counter
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCmp;
