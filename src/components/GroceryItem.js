import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

// Make a common file for this styled-component
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ColumnHalf = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ItemCard = styled.div`
  border-bottom: 1px solid black;
  margin-top: 2px;
  padding: 10px;
  padding-right: 0px;
`;

const ButtonDelete = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
`;

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
