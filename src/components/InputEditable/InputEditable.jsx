import React, { Component } from 'react';
import { Input, /* Row, Col, */ Button } from 'reactstrap';

class InputEditable extends Component {
  handleClickToEdit = () => {
    const { id, clickToEdit } = this.props;
    clickToEdit(id);
  }

  handleEdit = (e) => {
    if (e.type === 'keypress' && e.key !== 'Enter') {
      return;
    }

    const text = e.target.value;
    const { id, editComponent } = this.props;
    if (text.trim().length) {
      editComponent(id, text);
    }
  }

  handleDelete = () => {
    const { id, deleteComponent } = this.props;
    deleteComponent(id);
  }

  renderEditable = () => (
    <div>
      <Input
        type="text"
        className="form-control"
        defaultValue={this.props.text}
        onBlur={this.handleEdit}
        onKeyPress={this.handleEdit}
      />
    </div>
  );

  renderText = () => (
    <div className="row">
      <div className="col-10 no-padding">
        <Input
          type="text"
          className="form-control"
          defaultValue={this.props.text}
          onClick={this.handleClickToEdit}
          readOnly
        />
      </div>
      <Button
        onClick={this.handleDelete}
        color="danger"
        className="col-2"
      >
        <i className="icon ion-md-trash" />
      </Button>
    </div>
  );

  render() {
    const { edit } = this.props;

    if (edit) {
      return this.renderEditable();
    }

    return (
      <div>
        {this.renderText()}
      </div>);
  }
}

export default InputEditable;
