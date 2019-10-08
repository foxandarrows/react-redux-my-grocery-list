import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

// Make a common file for this styled-component
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ColumnHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const RowRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemCard = styled.div`
  border-bottom: 1px solid black;
  margin-top: 2px;
  padding: 10px;
`;

const ButtonDelete = styled.button``;

class GroceryItem extends Component {
  render() {
    const { id, title, dispatch } = this.props;
    return (
      <ItemCard>
        <Row>
          <ColumnHalf>
            <span>{title}</span>
          </ColumnHalf>
          <ColumnHalf>
            <ButtonDelete
              onClick={() => dispatch(courseActions.deleteCourse(id))}
            >
              Delete
            </ButtonDelete>
          </ColumnHalf>
        </Row>
      </ItemCard>
    );
  }
}

export default connect()(GroceryItem);
