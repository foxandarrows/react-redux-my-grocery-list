import React, { Component } from "react";
import styled from "styled-components";
import GroceryItem from "./GroceryItem";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Box = styled.div`
  margin: 10px;
`;

const InputText = styled.input.attrs({
  type: "text"
})`
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
`;

const InputSubmit = styled(InputText).attrs({
  type: "submit"
})`
  margin-left: 10px;
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
      <Row>
        <Box>
          <form onSubmit={handleSubmit}>
            <h2>My Grocery List</h2>
            <InputText onChange={handleChange} value={courseTitle} />
            <InputSubmit type="submit" value="Save" />
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
      </Row>
    );
  }
}

export default GroceryForm;
