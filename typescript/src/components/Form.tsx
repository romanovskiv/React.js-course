import React from 'react';
import { MyState } from '../App';

interface MyProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

class Form extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form">
        <input type="text" className="input" ref={this.props.inputRef} />
        <input type="submit" value={'Add task'} />
      </form>
    );
  }
}

export default Form;
