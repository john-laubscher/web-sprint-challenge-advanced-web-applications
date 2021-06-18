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

export default fetchColorService;
