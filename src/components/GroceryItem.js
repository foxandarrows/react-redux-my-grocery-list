import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

// *** Make a common file for these styled-components
const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Half = styled.div`
  width: 50%;
`;

// ***

const ItemCard = styled.div`
  border-bottom: 1px solid black;
  margin-top: 2px;
  padding: 10px;
  padding-right: 0px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 7px;
  margin-left: 5px;
`;

/** Make a reusable component for these components */
const Icon = styled.span`
  font-size: 18px;
  color: grey;
`;

class GroceryItem extends Component {
  render() {
    const { dispatch, id, title, editing } = this.props;
    return (
      <ItemCard>
        <Row>
          <Half>
            <span>{title}</span>
          </Half>
          <Half>
            <Button
              onClick={() => dispatch(courseActions.deleteCourse(id))}
            >
              <Icon className="material-icons">delete</Icon>
            </Button>
            <Button
                onClick={() => dispatch(courseActions.editCourse(id, editing))}
            >
              <Icon className="material-icons">edit</Icon>
            </Button>
          </Half>
        </Row>
      </ItemCard>
    );
  }
}

export default connect()(GroceryItem);
