import axiosWithAuth from "../helpers/axiosWithAuth";
//fetches colors
const fetchColorService = (setColors) => {
  axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      console.log("this is colors axios", res);
      setColors(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//deletes colors
export function deleteColorService(id) {
  axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${id}`)
    .then((res) => {
      console.log("this is delete axios", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default fetchColorService;
