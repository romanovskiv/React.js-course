import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
  }

  add(e) {
    e.preventDefault();

    if (e.target[0].value.trim() !== '') {
      let newTask = e.target[0].value;
      this.setState((state) => ({ tasks: [...state.tasks, newTask] }));
    } else {
      alert('Type your task');
    }

    e.target[0].value = '';
  }

  clear() {
    const conf = window.confirm(`Are you sure?`);
    if (conf) {
      this.setState({ tasks: [] });
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this);
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate', this, 'prevProps:' + JSON.stringify(prevProps));
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'getDerivedStateFromProps:',
      'props:' + JSON.stringify(props) + JSON.stringify(state),
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps:' + JSON.stringify(prevProps), 'prevState:' + JSON.stringify(prevState));
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Form state={this.state} onSubmit={this.add} />
        <div className="list">
          {this.state.tasks.length > 0 && <h3>My tasks:</h3>}
          {this.state.tasks.map((task, id) => {
            return <div key={id}>{task}</div>;
          })}
          {this.state.tasks.length > 0 && <button onClick={this.clear}>Clear all</button>}
        </div>
      </>
    );
  }
}

export default App;
