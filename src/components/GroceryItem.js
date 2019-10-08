import React, { Component } from "react";
import styled from "styled-components";

const RowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 0.5em;
`;

class GroceryItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <RowLeft>
        <span>{title}</span>
        {/* <button onClick={console.log(index)}>Remove</button> */}
      </RowLeft>
    );
  }
}

export default GroceryItem;
