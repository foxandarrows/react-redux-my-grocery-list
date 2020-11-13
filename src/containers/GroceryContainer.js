import React, { Component } from "react";
import { connect } from "react-redux";
import * as itemActions from "../redux/actions/groceryActions";
import PropTypes from "prop-types";
import GroceryForm from "../components/GroceryForm";
import GroceryItem from "../components/GroceryItem";
import GroceryEditForm from "../components/GroceryEditForm";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GroceryCard = styled.div`
  margin: 10px;
`;

class GroceryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        title: "",
        editing: false,
      },
    };
  }

  handleChange = e => {
    const item = { ...this.state.item, title: e.target.value };
    this.setState({ item });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.item.title !== "") {
        this.props.dispatch(itemActions.createItem(this.state.item));
        this.setState({
          item: {
            id: this.state.item.id + 1,
            title: "",
          }
        });
    }
  };

  render() {
    const { grocery } = this.props;
    return (
      <Row>
        <GroceryCard>
          <GroceryForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            itemTitle={this.state.item.title}
          />
          {grocery.map((item, index) => (
              item.editing
                  ? <GroceryEditForm
                      key={`edit-${index}`}
                      item={item}
                  /> // Form to update
                  : <GroceryItem
                      key={`item-${index}`}
                      item={item}
                  />
              ))}
        </GroceryCard>
      </Row>
    );
  }
}

GroceryContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  grocery: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    grocery: state.grocery
  };
}

export default connect(mapStateToProps)(GroceryContainer);
