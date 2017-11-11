import React, {Component} from 'react';

class DevsPage extends Component {
  constructor() {
    super();
    this.state = {
      dev: { nome: ''}
    }
  }

  onClickSave() {
    alert('Salvando ${this.state.dev.nome}');
  }

  onNameChange(event) {
    const dev = this.state.dev;
    dev.nome = event.target.value;
    this.setState({dev: dev});
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

export default DevsPage;