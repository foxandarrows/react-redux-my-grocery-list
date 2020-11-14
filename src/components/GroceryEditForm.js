import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as itemActions from "../redux/actions/groceryActions";
import PropTypes from "prop-types";

// Make a common file for this styled-component
const InputText = styled.input.attrs({
    type: "text"
})`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  padding: 7px;
`;

const Icon = styled.span`
  font-size: 18px;
  color: black;
`;

class GroceryEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.item
    }

    handleEditChange = e => {
        const item = { ...this.state, title: e.target.value }; // un niveau plus bas car props
        this.setState({ ...item });
    };

    handleEditSubmit = e => {
        e.preventDefault()
        const item = { ...this.item, editing: false };
        this.setState({ item });
        this.props.dispatch(itemActions.updateItem(this.state.id, this.state));
    };

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleEditSubmit}>
                <Row>
                    <InputText onChange={this.handleEditChange} value={title} />
                    <Button type="submit">
                        <Icon className="material-icons">save</Icon>
                    </Button>
                </Row>
            </form>
        );
    }
}

GroceryEditForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

export default connect()(GroceryEditForm);