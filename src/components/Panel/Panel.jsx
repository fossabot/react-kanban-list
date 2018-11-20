import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd'
import { Card, CardBody, CardHeader, CardFooter, Col, Button } from 'reactstrap';

import Cards from '../Card/Cards';
import InputEditable from '../InputEditable/InputEditable';
import { PANEL, CARD } from '../../constants/Types';

import * as actions from './Panel.actions';
import * as actionsCard from '../Card/Card.actions';

class Panel extends Component {
  handleCreateCard = () => {
    const { panel, createCard } = this.props;
    createCard(panel.id);
  };

  handleDeleteCard = () => {
    const { panel, deleteCard } = this.props;
    deleteCard(panel.id);
  }

  handleDeletePanel = (panelId) => {
    const { panel, deletePanel, deleteCard } = this.props;
    const { cards } = panel;

    deletePanel(panelId);
    cards.forEach(card => deleteCard(panelId, card));
  }

  render() {
    const { cards, panel, connectDragPreview, connectDropTarget, connectDragSource, editPanel } = this.props;
    const filteredCards = panel.cards
      .map(id => cards.find(card => card.id === id))
      .filter(card => card);

    return connectDragPreview(
      connectDropTarget(
        <div class="card__div">
          <Col>
            {connectDragSource(
              <div class="card__painel">
                <Card>
                  <CardHeader>
                    <InputEditable
                      id={panel.id}
                      edit={panel.edit}
                      text={panel.text}
                      editComponent={editPanel}
                      clickToEdit={editPanel}
                      deleteComponent={this.handleDeletePanel}
                    />
                  </CardHeader>
                  <CardBody>
                    <Cards
                      cards={filteredCards}
                      clickToEdit={this.props.editCard}
                      deleteCard={this.handleDeleteCard}
                      moveCard={this.props.moveCard}
                    />
                  </CardBody>
                  <CardFooter>
                    <Button onClick={this.handleCreateCard}>
                      <i className="icon ion-md-add-circle" /> Card
                  </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </Col>
        </div>
      )
    )
  }
};

const mapStateToProps = state => ({ cards: state.cardsReducer });

const mapDispatchToProps = { ...actions, ...actionsCard };

const dragNDropSrc = {
  beginDrag(props) {
    return { id: props.panel.id };
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview(),
});

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
})

const panelHoverTarget = {
  hover(props, monitor) {
    const { id, cards } = props.panel;
    const monitorProps = monitor.getItem();
    const monitorType = monitor.getItemType();
    const monitorId = monitorProps.id;

    if (id !== monitorId && CARD === monitorType) {
      return props.movePanel(id, monitorId);
    }

    if (!cards.length && CARD === monitorType) {
      return props.insertPanel(id, monitorId);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DragSource(PANEL, dragNDropSrc, collect)(
    DropTarget([CARD, PANEL], panelHoverTarget, collectTarget)(Panel)
  )
)
