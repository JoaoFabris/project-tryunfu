import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super(); // não sobrescreve a chamada do react.component
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this); // bind para que this dentro do class funcione.
  }

  onBtnValidate = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const limit = 210;
    const attLimit = 90;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    if (sum > limit) {
      return false;
    }
    if (!cardName || !cardDescription || !cardRare || !cardImage) {
      return false;
    }
    if (!cardAttr1 || !cardAttr2 || !cardAttr3) {
      return false;
    }
    if (cardAttr1 > attLimit || cardAttr2 > attLimit || cardAttr3 > attLimit) {
      return false;
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      return false;
    }
    return true;
  }

  onButtonStatusHandler = () => {
    const status = !this.onBtnValidate();
    this.setState(() => ({ isSaveButtonDisabled: status,
    }));
  }

  onSaveButtonClick = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox' // acesso dinamico com [].
      ? event.target.checked : event.target.value }, this.onButtonStatusHandler);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state; // forma controlada.
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
