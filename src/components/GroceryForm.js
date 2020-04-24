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

const IconAdd = styled.span`
  font-size: 18px;
  color: black;
`;

class GroceryForm extends Component {
  render() {
    const { handleSubmit, handleChange, courseTitle } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2>My Grocery List</h2>
        <RowMarginBottom>
          <InputText onChange={handleChange} value={courseTitle} />
          <ButtonSubmit type="submit">
            <IconAdd className="material-icons">add</IconAdd>
          </ButtonSubmit>
        </RowMarginBottom>
      </form>
    );
  }
}

export default GroceryForm;
