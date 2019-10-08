import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

const RowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 0.5em;
`;

class GroceryItem extends Component {
  render() {
    const { id, title, dispatch } = this.props;
    return (
      <RowLeft>
        <span>{title}</span>
        <button onClick={() => dispatch(courseActions.deleteCourse(id))}>
          Delete
        </button>
      </RowLeft>
    );
  }
}

export default connect()(GroceryItem);
