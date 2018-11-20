import React from 'react';
import { Row, Container } from 'reactstrap';
import Panel from './Panel';

const Panels = (props) => {
  const {
    panels, editPanel, deletePanel, moveCard,
  } = props;

  return (
    <Container>
      <Row>
        {
          panels.map(panel => (
            <Panel
              key={panel.id}
              panel={panel}
              editPanel={editPanel}
              deletePanel={deletePanel}
              moveCard={moveCard}
            />
          ))
        }
      </Row>
    </Container>
  );
};

export default Panels;
