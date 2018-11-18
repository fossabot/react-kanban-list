import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Panels from '../../components/Panel/Panels';
import * as actions from '../../components/Panel/Panel.actions';

class HomePage extends Component {
  handleCreatePanel = () => {
    this.props.createPanel();
  };

  render() {
    const { panels, editPanel, deletePanel, movePanel } = this.props;

    return (
      <div>
        <div className="col-12 action-create">
          <Button
            color="primary"
            onClick={this.handleCreatePanel}
          >
            <i className=""></i> New Panel
          </Button>
        </div>
        <Panels
          panels={panels}
          editPanel={editPanel}
          deletePanel={deletePanel}
          movePanel={movePanel}
        />
      </div>
    )
  }
};

const mapStateToProps = state => ({ panels: state.panelsReducer });

const mapDispatchToProps = { ...actions };

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
