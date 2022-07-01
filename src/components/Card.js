import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <div>
          <h1 data-testid="name-card">{ cardName }</h1>
        </div>
        <div className="cardImage">
          <img
            name="image-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <h2 data-testid="description-card">
          { cardDescription }
        </h2>
        <h3 data-testid="attr1-card">
          { cardAttr1 }
        </h3>
        <h3 data-testid="attr2-card">
          { cardAttr2 }
        </h3>
        <h3 data-testid="attr3-card">
          { cardAttr3 }
        </h3>
        <h3 data-testid="rare-card">
          { cardRare }
        </h3>
        <div>
          {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
