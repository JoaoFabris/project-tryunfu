import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="text">
            Nome
            <input data-testid="name-input" type="text" />
          </label>
          <label htmlFor="textarea">
            Descrição
            <input data-testid="description-input" type="textarea" />
          </label>
          <label htmlFor="number1">
            Attr01
            <input data-testid="attr1-input" type="number" />
          </label>
          <label htmlFor="number2">
            Attr02
            <input data-testid="attr2-input" type="number" />
          </label>
          <label htmlFor="number3">
            Attr03
            <input data-testid="attr3-input" type="number" />
          </label>
          <label htmlFor="text">
            Imagem
            <input data-testid="image-input" type="text" />
          </label>
          <label htmlFor="select">
            Raridade
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            Super Trybe Trunfo
            <input data-testid="trunfo-input" type="checkbox" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
