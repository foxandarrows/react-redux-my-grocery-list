import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import styled from "styled-components";

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

class CoursesPage extends Component {
  state = {
    course: {
      id: 0,
      title: ""
    }
  };

  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  //   handleDelete(e, index) {
  //     e.preventDefault();
  //     this.props.dispatch(courseActions.deleteCourse(index));
  //   }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    this.setState({
      course: {
        id: new Date(),
        title: ""
      }
    });
  };

  render() {
    return (
      <RowLeft>
        <Box>
          <form onSubmit={this.handleSubmit}>
            <h2>My Grocery List</h2>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.course.title}
            />
            <MarginLeft>
              <input type="submit" value="Save" />
            </MarginLeft>
          </form>
          {this.props.courses.map((index, course) => (
            <div>
              <RowLeft key={course.id}>{course.title}</RowLeft>
              <button
                onClick={() =>
                  this.props.dispatch(
                    courseActions.deleteCourse(this.state.course.id)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}
        </Box>
      </RowLeft>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
