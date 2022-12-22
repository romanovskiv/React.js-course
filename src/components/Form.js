import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form">
        <input type="text" />
        <input type="submit" value={'Add task'} />
      </form>
    );
  }
}

export default Form;
