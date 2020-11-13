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

const RowMarginBottom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonSubmit = styled.button`
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

class GroceryForm extends Component {
    render() {
        const { handleSubmit, handleChange, itemTitle } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2>My Grocery List</h2>
                <RowMarginBottom>
                    <InputText onChange={handleChange} value={itemTitle} />
                    <ButtonSubmit type="submit">
                        <Icon className="material-icons">add</Icon>
                    </ButtonSubmit>
                </RowMarginBottom>
            </form>
        );
    }
}

export default GroceryForm;
