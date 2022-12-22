import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
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
