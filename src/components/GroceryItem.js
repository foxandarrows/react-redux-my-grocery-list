import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

// *** Make a common file for these styled-components
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ColumnOneQuarter = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const ColumnThreeQuarters = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

// ***

const ItemCard = styled.div`
  border-bottom: 1px solid black;
  margin-top: 2px;
  padding: 10px;
  padding-right: 0px;
`;

const ButtonDelete = styled.button`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 7px;
`;

/** Make a reusable component for these components */
const IconDelete = styled.span`
  font-size: 18px;
  color: grey;
`;

class GroceryItem extends Component {
  render() {
    const { id, title, dispatch } = this.props;
    return (
      <ItemCard>
        <Row>
          <ColumnThreeQuarters>
            <span>{title}</span>
          </ColumnThreeQuarters>
          <ColumnOneQuarter>
            <ButtonDelete
              onClick={() => dispatch(courseActions.deleteCourse(id))}
            >
              <IconDelete className="material-icons">delete</IconDelete>
            </ButtonDelete>
          </ColumnOneQuarter>
        </Row>
      </ItemCard>
    );
  }
}

export default connect()(GroceryItem);
