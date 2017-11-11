import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as devActions from '../../actions/devActions'

class DevsPage extends Component {
  constructor() {
    super();
    this.state = {
      dev: { nome: ''}
    }
  }

  onClickSave() {
    this.props.dispatch(devActions.createDev(this.state.dev));
    // alert('Salvando ${this.state.dev.nome}');
  }

  onNameChange(event) {
    const dev = this.state.dev;
    dev.nome = event.target.value;
    this.setState({dev: dev});
  }

  devRow(dev, index) {
    return <div key={index}>{dev.nome}</div>;
  }

  render() {
    return(
      <div className="container">
        <h1>Desenvolvedores</h1>
        <input type="text" onChange={this.onNameChange.bind(this)} value={this.state.dev.nome}/>
        <input type="submit" onClick={this.onClickSave.bind(this)} value="Salvar"/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    devs: state.devs
  };
}

export default connect(mapStateToProps)(DevsPage);