import axios from "axios";

//TRAE LAS RECETAS DE LA API ----!
export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}

//FILTRADO DE DIETAS
export function filterDiet(payload) {
  return {
    type: "FILTER_BY_DIET",
    payload,
  };
}

//TRAE LAS DIETAS EXISTENTES
export function getDiets() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/diets");
    return dispatch({
      type: "GET_DIETS",
      payload: json.data,
    });
  };
}

// CREA UNA NUEVA RECETA
export function postRecipe(payload) {
  return async function () {
    console.log(payload);
    const json = await axios.post("http://localhost:3001/recipes", payload);
    // console.log(json);
    return json;
  };
}

// BUSCA UNA RECETA POR SU NOMBRE
export function getRecipesNames(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/recipes?name=" + payload
      );
      return dispatch({
        type: "GET_NAME_RECIPES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ORDENA ALFABETICAMENTE LAS RECETAS
export function orderbyName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}
// ORDENA POR HEALTHYSCORE
export function orderByScore(payload) {
  return {
    type: "ORDER_BY_SCORE",
    payload,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/recipes/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const cleanData = () => {
  return { type: "CLEAN_DATA" };
};
