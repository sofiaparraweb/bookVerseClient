import { User } from "@auth0/auth0-spa-js";
import axios from "axios";

//actions books
export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_DETAIL_BOOK = "GET_DETAIL_BOOK";
// export const GET_BOOK_TYPE = "GET_BOOK_TYPE";
// export const GET_ALL_BOOKS_TYPES = "GET_ALL_BOOKS_TYPES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_FORMAT = "FILTER_BY_FORMAT";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
// export const ORDER_BY_AUTHOR = "ORDER_BY_AUTHOR"
// export const ADD_BOOK_TO_WISHLIST = "ADD_BOOK_TO_WISHLIST";
// export const REMOVE_BOOK_FROM_WISHLIST = "REMOVE_BOOK_FROM_WISHLIST";
// export const CLEAR_WISHLIST = "CLEAR_WISHLIST";
 export const SEARCH_BY_NAME = "SEARCH_BY_NAME"

//actions carrito
export const GET_CART = "GET_CART";
// export const ADD_TO_CART = "ADD_TO_CART";
// export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
// export const DELETE_ALL_CART = "DELETE_ALL_CART";
// export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const SET_GRIDVIEW = "SET_GRIDVIEW"
// export const POST_PAYMENT = "POST_PAYMENT";

//actions dashboard
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";
// export const EDIT_PRODUCT = "EDIT_PRODUCT"
// export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
// export const GET_ALL_USERS = "GET_ALL_USERS";
// export const DELETE_USER = "DELETE_USER";
// export const SUSPEND_USER = "SUSPEND_USER"

//actions users
export const GET_USER= "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const GET_USER_ID = "GET_USER_ID";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USER_ID = "SET_USER_ID";

//actions footer
export const FORM_SUSCRIPTION = "FORM_SUBCRIPTION";

// export const url = "https://bookverse-m36k.onrender.com";
export const url = "http://localhost:3001";

//------------------------------------books-----------------------------------
export function getAllBooks() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/books/`);
      return dispatch({ type: GET_ALL_BOOKS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
}

export const getDetailBooks = (id) =>{
  return async (dispatch) =>{
    try {
      const response = await axios.get(`${url}/books/:id`);
      console.log(data);
      return dispatch({type: GET_DETAIL_BOOK, payload: response.data})
    } catch (err) {
      console.log(err);
    }
  }
}

// export const getBookType = () => {
//   return async (dispatch) => {
//     const resp = await axios(`${url}/books/`);
//     return dispatch({ type: GET_BOOK_TYPE, payload: resp.data });
//   };
// };

// export const getAllBooksTypes = () => {
//   return async (dispatch) => {
//     const resp = await axios(`${url}/books/`);
//     return dispatch({ type: GET_ALL_BOOKS_TYPES, payload: resp.data });
//   };
// };

//------------------------------------filtros y ordenamiento
export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/name?name=${name}`);
      dispatch({ type: SEARCH_BY_NAME, payload: response.data.filteredName });
      console.log(response.data.filteredName)
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByGenre = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/byGenre?name=${name}`);
      dispatch({ type: FILTER_BY_GENRE, payload: response.data.filteredByGenre});
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByFormat = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/filter/format?name=${name}`);
      dispatch({ type: FILTER_BY_FORMAT, payload: response.data.filteredByFormat});
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByPrice = (price) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/order/byPrice?price=${price}`);
      dispatch({ type: ORDER_BY_PRICE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByTitle = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/order/byTitle?title=${title}`);
      dispatch({ type: ORDER_BY_TITLE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const orderByAuthor = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: ORDER_BY_AUTHOR, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const addWishlist = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: ADD_BOOK_TO_WISHLIST, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const removeWishlist = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: REMOVE_BOOK_FROM_WISHLIST, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const clearWishlist = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: CLEAR_WISHLIST, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

//------------------------------------store view-----------------------------------
const setGridView = () =>{
  return dispatch({type: SET_GRIDVIEW})
}

// ------------------------------------Cart-----------------------------------

export const getCart = (user_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/cart/${user_id}`);
      dispatch({ type: GET_CART, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const addToCart = (user_id, id, quantity) => {
//   return async (dispatch) =>{
//     try {
//       const response = await axios.post(`${url}/cart/add?user_id=${user_id}&product_id=${id}&quantity=${quantity}`)
//       dispatch({ type: ADD_TO_CART, payload: response.data})
//     } catch (error){
//       console.log(error);
//     }
//   }
// }

// export const deleteAllCart = (user_id) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(`${url}/cart/removeAll?user_id=${user_id}`);
//       dispatch({ type: DELETE_ALL_CART, payload: [] });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const deleteCart = (user_id, id) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(
//         `${url}/cart/remove?user_id=${user_id}&product_id=${id}`
//       );
//       dispatch({ type: DELETE_PRODUCT_CART, payload: id });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const changeQuantity = (user_id, id, quantity) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(`${url}/cart?user_id=${user_id}&product_id=${id}&quantity=${quantity}`);
//       dispatch({ type: CHANGE_QUANTITY, payload: response.data });
//     } catch (error) {
//       console.log(error);  
//     }
//   };
// };

// export const postPayment = (user_id) => {
//   return async (dispatch) => {
//     try {
//       console.log(user_id)
//       const response = await axios.post(`${url}/payment/cart/create-order/${user_id}`)
//       if (response) {
//         dispatch({ type: POST_PAYMENT, payload: response.data })
//         return response.data;
//       } 
//     }catch (error) {
//       console.log("Error al enviar la información al backend", error)
//     }
//   }
// };


//------------------------------------user-----------------------------------

export const getUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/${userId}`);
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserId = (email) =>{
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/email/${email}`);
      console.log(response.data, 'function getUserId');
      dispatch({
        type: GET_USER_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createUser = (newUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/user`, newUser);
      const userId = response.data.newUser.id;
      dispatch({
        type: SET_USER_ID,
        payload: userId,
      });
      dispatch({
        type: CREATE_USER,
        payload: response.data,
      });
      console.log('USUARIO CREADO!!!')
      dispatch(getProfile(userId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (data) => {
  console.log(data)
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/user/edit`, data);
      dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
      console.log('se ejecuto con exitot bbbb')
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

//------------------------------------dashboard-----------------------------------

// export const addProduct = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: product,
//   };
// };

// export const deleteProduct = (product) => {
//   return {
//     type: DELETE_PRODUCT,
//     payload: product,
//   };
// };

// export function getAllOrders() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${url}`);
//       return dispatch({
//         type: GET_ALL_ORDERS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export function getAllUsers() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${url}/user`);
//       return dispatch({
//         type: GET_ALL_USERS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export const deleteUser = (id) => {
//   return {
//          type: DELETE_USER,
//          payload: id,
//      }
//  };

//  export const suspendUser = (id) => {
//   return {
//          type: SUSPEND_USER,
//          payload: id,
//      }
//  };

//------------------------------------formularios-----------------------------------

export const formSuscription = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/form/formFooter`, formData);
      dispatch({
        type: FORM_SUSCRIPTION,
        payload: response.data,
      });
      console.log('funcion email footer')
    } catch (error) {
      console.log(error);
    }
  };
};
