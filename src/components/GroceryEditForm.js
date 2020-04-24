import React, { Component } from "react";
import styled from "styled-components";

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

const IconAdd = styled.span`
  font-size: 18px;
  color: black;
`;

class GroceryEditForm extends Component {
    render() {
        const { handleEdit, handleChange, courseTitle } = this.props;
        return (
            <form onSubmit={handleEdit}>
                <Row>
                    <InputText onChange={handleChange} value={courseTitle} />
                    <Button type="submit">
                        <IconAdd className="material-icons">save</IconAdd>
                    </Button>
                </Row>
            </form>
        );
    }
}

export default GroceryEditForm;