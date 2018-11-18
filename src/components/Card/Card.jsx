import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { Col } from 'reactstrap';
import { CARD } from '../../constants/Types';

class Card extends Component {
  static proptypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  }

  render() {
    const { connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(
      connectDropTarget(
        <div>
          <Col>
            {this.props.children}
          </Col>
        </div>
      )
    );
  }
}

const dragNDropSrc = {
  beginDrag(props) {
    return { id: props.id };
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
});

const cardHoverTarget = {
  hover(props, monitor) {
    const { id } = props;
    const monitorProps = monitor.getItem();
    const monitorId = monitorProps.id;

    if (id !== monitorId) {
      props.moveCard(id, monitorId);
    }
  }
};

export default DragSource(CARD, dragNDropSrc, collect)(
  DropTarget(CARD, cardHoverTarget, collectTarget)(Card)
)
