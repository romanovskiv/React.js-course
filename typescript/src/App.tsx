import * as React from 'react';
import Form from './components/Form';

interface MyProps {
  title: string;
}

export interface MyState {
  tasks: string[];
}

class App extends React.Component<MyProps, MyState> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: MyProps) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.inputRef = React.createRef();
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
  }

  add(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.inputRef.current) {
      let inputValue = this.inputRef.current.value;

      if (inputValue.trim() !== '') {
        this.setState((state) => ({ tasks: [...state.tasks, inputValue] }));
      } else {
        alert('Type your task');
      }

      this.inputRef.current.value = '';
    }
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

  componentDidUpdate(prevProps: {}) {
    console.log('componentDidUpdate', this, 'prevProps:' + JSON.stringify(prevProps));
  }

  static getDerivedStateFromProps(props: {}, state: {}) {
    console.log(
      'getDerivedStateFromProps:',
      'props:' + JSON.stringify(props) + JSON.stringify(state),
    );
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: {}) {
    console.log('prevProps:' + JSON.stringify(prevProps), 'prevState:' + JSON.stringify(prevState));
  }

  render() {
    const formProps = {
      state: this.state,
      onSubmit: this.add,
      inputRef: this.inputRef,
    };
    return (
      <>
        <h1>{this.props.title}</h1>
        <Form {...formProps} />

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
