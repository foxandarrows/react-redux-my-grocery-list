import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as itemActions from "../redux/actions/groceryActions";
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

const GroceryContainer = () => {
  const [item, setItem] = useState({
    id: 0,
    title: "",
    editing: false,
  });
  const grocery = useSelector( state => state.grocery );
  const dispatch = useDispatch();

  const handleChange = e => {
    const changeItem = { ...item, title: e.target.value };
    setItem(changeItem);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (item.title !== "") {
        dispatch(itemActions.createItem(item));
        setItem({
              id: item.id + 1,
              title: ""
        })
    }
  };

  return (
    <Row>
      <GroceryCard>
        <GroceryForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          itemTitle={item.title}
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

export default GroceryContainer;
