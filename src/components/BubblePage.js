import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import axiosWithAuth from "../helpers/axiosWithAuth";
import fetchColorService from "../services/fetchColorService";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  //api calls--get, edit, and delete colors
  useEffect(() => {
    fetchColorService(setColors);
  }, []);

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then((res) => {
        console.log("this is put axios", res);
        console.log("arg:", editColor);
        fetchColorService(setColors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteColor = (color) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then((res) => {
        console.log("this is delete axios", res);
        console.log("arg:", color.id);
        fetchColorService(setColors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor} />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
