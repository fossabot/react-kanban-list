import React, { Component } from 'react';

import Card from './Card';
import InputEditable from '../InputEditable/InputEditable';

class Cards extends Component {

  mountCards = () => {
    const { cards, moveCard, clickToEdit, editCard, deleteCard } = this.props;
    return cards.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        moveCard={moveCard}
      >
        <InputEditable
          id={item.id}
          edit={item.edit}
          text={item.text}
          clickToEdit={clickToEdit}
          editComponent={editCard}
          deleteComponent={deleteCard}
        />
      </Card>
    ));
  }

  render() {
    console.log('this: ', this.props)
    return (
      <ul>
        {this.mountCards()}
      </ul>
    )
  }
};

export default Cards;
