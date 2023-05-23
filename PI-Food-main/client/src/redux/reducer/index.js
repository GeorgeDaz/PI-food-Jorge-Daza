// import {
//   GET_RECIPES,
//   ORDER_AZ,
//   ORDER_ZA,
//   HS_AMAYOR,
//   HS_AMENOR,
//   GET_RECIPES_API,
//   GET_RECIPES_DB,
//   GET_FILTER_DIET,
//   GET_RECIPES_NAME,
//   GET_RECIPE_ID,
//   POST_RECIPE,
//   SET_NAME_DETAIL,
//   SET_DIET,
//   NEXT_PAGE,
//   PREVIOUS_PAGE,
//   TOTAL_PAGES,
//   GET_DIETS,
//   SET_DIETS_FILTER,
//   DELETE_DIETS_FILTER,
// } from "../actions";

// const initialState = {
//   recipes: "",
//   recipeDetail: "",
//   nameDetail: "",
//   page: 1,
//   totalPages: 0,
//   diets: "",
//   dietsFilter: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_RECIPES:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//         ),
//       };

//     case ORDER_AZ:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//         ),
//       };

//     case ORDER_ZA:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.name > b.name ? -1 : a.name < b.name ? 1 : 0
//         ),
//       };

//     case HS_AMAYOR:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.healthScore > b.healthScore
//             ? 1
//             : a.healthScore < b.healthScore
//             ? -1
//             : 0
//         ),
//       };

//     case HS_AMENOR:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.healthScore > b.healthScore
//             ? -1
//             : a.healthScore < b.healthScore
//             ? 1
//             : 0
//         ),
//       };

//     case GET_RECIPES_API:
//       return {
//         ...state,
//         recipes: action.payload,
//       };

//     case GET_RECIPES_DB:
//       return {
//         ...state,
//         recipes: action.payload,
//       };

//     case GET_FILTER_DIET:
//       return {
//         ...state,
//         recipes: action.payload.recipes
//           .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
//           .filter((recipe) => recipe.dietss.includes(action.payload.diet)),
//       };

//     case GET_RECIPES_NAME:
//       return {
//         ...state,
//         recipes: action.payload.sort((a, b) =>
//           a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//         ),
//       };

//     case GET_RECIPE_ID:
//       return {
//         ...state,
//         recipeDetail: action.payload,
//       };

//     case POST_RECIPE:
//       return {
//         ...state,
//       };

//     case SET_NAME_DETAIL:
//       return {
//         ...state,
//         nameDetail: action.payload,
//       };

//     case SET_DIET:
//       return {
//         ...state,
//       };

//     case NEXT_PAGE:
//       return {
//         ...state,
//         page: state.page + 1,
//       };

//     case PREVIOUS_PAGE:
//       return {
//         ...state,
//         page: state.page - 1,
//       };

//     case TOTAL_PAGES:
//       return {
//         ...state,
//         totalPages: action.payload,
//       };

//     case GET_DIETS:
//       return {
//         ...state,
//         diets: action.payload,
//       };

//     case SET_DIETS_FILTER:
//       return {
//         ...state,
//         dietsFilter: [...state.dietsFilter, action.payload],
//       };

//     case DELETE_DIETS_FILTER:
//       return {
//         ...state,
//         dietsFilter: [],
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default rootReducer;

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //TRAE LAS RECETAS DE LA API
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    //FILTRADO DE DIETAS
    // case "FILTER_BY_DIET":
    //   const recipesdos = state.allRecipes;
    //   const recipesfiltered =
    //     action.payload === "All"
    //       ? recipesdos
    //       : recipesdos.filter((e) => e.diets.includes(action.payload));
    //   return {
    //     ...state,
    //     recipes: recipesfiltered,
    //   };

    // BUSCA UNA RECETA POR SU NOMBRE
    case "GET_NAME_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };

    // CREA UNA NUEVA RECETA
    case "POST_RECIPE":
      return {
        ...state,
      };

    //TRAE LAS DIETAS EXISTENTES
    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };

    // ORDENA ALFABETICAMENTE LAS RECETAS
    // case "ORDER_BY_NAME":
    // const recipestres = state.allRecipes;
    // const ordername =
    //   action.payload === "asc"
    //     ? recipestres.sort(function (a, b) {
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         if (b.name > a.name) {
    //           return -1;
    //         }
    //         return 0;
    //       })
    //     : recipestres.sort(function (a, b) {
    //         if (a.name > b.name) {
    //           return -1;
    //         }
    //         if (b.name > a.name) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    // return {
    //   ...state,
    //   recipes: ordername,
    // };

    // case "ORDER_BY_SCORE":
    //   let scoredRecipes =
    //     action.payload === "highest score"
    //       ? state.recipes.sort(function (a, b) {
    //           if (a.healthyscore < b.healthyscore) {
    //             return 1;
    //           }
    //           if (b.healthyscore < a.healthyscore) {
    //             return -1;
    //           }
    //           return 0;
    //         })
    //       : state.recipes.sort(function (a, b) {
    //           if (a.healthyscore < b.healthyscore) {
    //             return -1;
    //           }
    //           if (b.healthyscore < a.healthyscore) {
    //             return 1;
    //           }
    //           return 0;
    //         });
    //   return {
    //     ...state,
    //     recipes: scoredRecipes,
    //   };

    // TRAE LOS DETAILS PARA RUTA DINAMICA
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
