import React from 'react';
import { connect } from 'react-redux';
import { getWorkflows } from '../actions'

let styles = {
  backgroundColor: 'lightskyb',
  width: '25rem',
  height: '4rem',
  borderRadius: '2rem',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid'
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getWorkflows}
      >List of workflows</button>
    );
  }

};

const mapDispatchToProps = {
  getWorkflows: getWorkflows,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
