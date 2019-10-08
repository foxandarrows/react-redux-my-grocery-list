import React, { Component } from "react";
import styled from "styled-components";
import GroceryItem from "./GroceryItem";

const MarginLeft = styled.span`
  margin-left: 10px;
`;

const RowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 0.5em;
`;

const Box = styled.div`
  margin: 10px;
  padding: 10px;
  padding-bottom: 20px;
  background-color: lightblue;
`;

class GroceryForm extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      // handleDelete,
      courses,
      courseTitle
    } = this.props;
    return (
      <RowLeft>
        <Box>
          <form onSubmit={handleSubmit}>
            <h2>My Grocery List</h2>
            <input type="text" onChange={handleChange} value={courseTitle} />
            <MarginLeft>
              <input type="submit" value="Save" />
            </MarginLeft>
          </form>
          <div>
            {courses.map((course, index) => {
              return (
                <GroceryItem
                  key={index}
                  title={course.title}
                  id={course.id}
                  // handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </Box>
      </RowLeft>
    );
  }
}

export default GroceryForm;
