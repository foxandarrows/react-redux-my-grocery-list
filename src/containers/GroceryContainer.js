import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import GroceryForm from "../components/GroceryForm";

class GroceryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        id: 0,
        title: ""
      }
    };
  }

  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  // handleDelete(e, index) {
  //   e.preventDefault();
  //   this.props.dispatch(courseActions.deleteCourse(this.props.courses.id));
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    this.setState({
      course: {
        id: this.state.course.id + 1,
        title: ""
      }
    });
  };

  render() {
    const { courses } = this.props;
    console.log("courses", courses);
    console.log("state", this.state);
    return (
      <GroceryForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        // handleDelete={this.handleDelete}
        courses={courses}
        courseTitle={this.state.course.title}
      />
    );
  }
}

GroceryContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(GroceryContainer);
