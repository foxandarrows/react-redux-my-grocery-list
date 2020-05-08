import React, { Component } from "react";
import styled from "styled-components";
import * as courseActions from "../redux/actions/courseActions";

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
    render() {
        const { handleEditSubmit, handleChange, courseTitle } = this.props;
        return (
            <form onSubmit={handleEditSubmit}>
                <Row>
                    <InputText onChange={handleChange} value={courseTitle} />
                    <Button type="submit">
                        <Icon className="material-icons">save</Icon>
                    </Button>
                </Row>
            </form>
        );
    }
}

export default GroceryEditForm;