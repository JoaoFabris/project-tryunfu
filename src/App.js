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
      hasTrunfo: false,
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this); // bind para que this dentro do class funcione.
  }

  inputsInitial = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
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
    const status = !this.onBtnValidate(); // isSaveButtonDisabled esta 'true'(desabilitado), porém quando a condição passar a ser true, por ter '!', ele passará ser false, assim habilitando o btn.
    this.setState(() => ({ isSaveButtonDisabled: status,
    }));
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cards } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      cards: [...cards, card],
      hasTrunfo: card.cardTrunfo,
    }, this.inputsInitial);
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
      hasTrunfo,
      cards,
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
          hasTrunfo={ hasTrunfo }
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
        {
          cards.map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </>
    );
  }
}

export default App;
