import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as devActions from '../../actions/devActions';
import {bindActionCreators} from 'redux';

class DevsPage extends Component {
  constructor() {
    super();
    // this.state = {
    //   dev: { nome: ''}
    // }
  }

  // onClickSave() {
  //   this.props.actions.createDev(this.state.dev);
  // }

  // onNameChange(event) {
  //   const dev = this.state.dev;
  //   dev.nome = event.target.value;
  //   this.setState({dev: dev});
  // }

  devRow(dev, index) {
    return <div key={index}>{dev.nome}</div>;
  }

  render() {
    return(
      <div className="container">
        <h1>Desenvolvedores</h1>
        {this.props.devs.map(this.devRow)}
        {/* <input type="text" onChange={this.onNameChange.bind(this)} value={this.state.dev.nome}/> */}
        {/* <input type="submit" onClick={this.onClickSave.bind(this)} value="Salvar"/> */}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    devs: state.devs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(devActions, dispatch)
    // createDev: dev => dispatch(devActions.createDev(dev))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevsPage);