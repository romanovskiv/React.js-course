import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form">
        <input
          type="text"
          onChange={(e) => this.props.onChange(e)}
          ref={(ref) => (this.inputHandler = ref)}
        />
        <input
          type="button"
          value={'Focus'}
          onClick={() => {
            this.inputHandler.focus();
          }}
        />
        <input
          type="submit"
          value={'Add task'}
          disabled={this.props.state.inputData === 'реакт' ? true : false}
        />
      </form>
    );
  }
}

export default Form;
