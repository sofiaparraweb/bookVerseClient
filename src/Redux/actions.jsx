import { User } from "@auth0/auth0-spa-js";
import axios from "axios";

// //actions books
// export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
// export const GET_DETAIL_BOOK = "GET_DETAIL_BOOK";
// export const GET_BOOK_TYPE = "GET_BOOK_TYPE";
// export const GET_ALL_BOOKS_TYPES = "GET_ALL_BOOKS_TYPES";
// export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
// export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
// export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
// export const ORDER_BY_AUTHOR = "ORDER_BY_AUTHOR"
// export const ADD_BOOK_TO_WISHLIST = "ADD_BOOK_TO_WISHLIST";
// export const REMOVE_BOOK_FROM_WISHLIST = "REMOVE_BOOK_FROM_WISHLIST";
// export const CLEAR_WISHLIST = "CLEAR_WISHLIST";
// export const SEARCH_BY_NAME = "SEARCH_BY_NAME"

// //actions carrito
export const GET_CART = "GET_CART";
// export const ADD_TO_CART = "ADD_TO_CART";
// export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
// export const DELETE_ALL_CART = "DELETE_ALL_CART";
// export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
// export const POST_PAYMENT = "POST_PAYMENT";

// //actions dashboard
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";
// export const EDIT_PRODUCT = "EDIT_PRODUCT"
// export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
// export const GET_ALL_USERS = "GET_ALL_USERS";
// export const DELETE_USER = "DELETE_USER";
// export const SUSPEND_USER = "SUSPEND_USER"

// //actions users
// export const GET_USER= "GET_USER";
// export const GET_USER_EMAIL = 'GET_USER_EMAIL';
// export const CREATE_USER = "CREATE_USER";
// export const GET_USER_ID = "GET_USER_ID";
// export const UPDATE_USER = "UPDATE_USER";
// export const SET_USER_ID = "SET_USER_ID";

// //actions footer
// export const FORM_SUBSCRIPTION = "FORM_SUBSCRIPTION";

//export const url = "http://localhost:3001";

// //------books-----
// export function getAllBooks() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${url}/`);
//       return dispatch({ type: GET_ALL_BOOKS, payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// export const getDetailBooks = () =>{
//   return async (dispatch) =>{
//     const {data} = await axios.get(`${url}/`);
//     return dispatch({type: GET_DETAIL_BOOK, payload: data})
//   }
// }

// export const getBookType = () => {
//   return async (dispatch) => {
//     const resp = await axios(`${url}/`);
//     return dispatch({ type: GET_BOOK_TYPE, payload: resp.data });
//   };
// };

// export const getAllBooksTypes = () => {
//   return async (dispatch) => {
//     const resp = await axios(`${url}/`);
//     return dispatch({ type: GET_ALL_BOOKS_TYPES, payload: resp.data });
//   };
// };

// export const searchByName = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: SEARCH_BY_NAME, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const filterByType = (name) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/filter/byType?name=${name}`);
//       dispatch({ type: FILTER_BY_TYPE, payload: response.data.filteredByType });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const orderByPrice = (price) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/order/byPrice?price=${price}`);
//       dispatch({ type: ORDER_BY_PRICE, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const orderByTitle = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}`);
//       dispatch({ type: ORDER_BY_TITLE, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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

// /* -----------------------------carrito----------------------------- */

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


// /* -----------------------------user----------------------------- */

// export const getUser = (userId) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/user/${userId}`);
//       dispatch({
//         type: GET_USER,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getUserId = (email) =>{
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/user/mail/${email}`);
//       console.log(response);
//       dispatch({
//         type: GET_USER_ID,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export const createUser = (newUser) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.post(`${url}/user`, newUser);
//       const userId = response.data.newUser.id;
//       dispatch({
//         type: SET_USER_ID,
//         payload: userId,
//       });
//       dispatch({
//         type: CREATE_USER,
//         payload: response.data,
//       });
//       dispatch(getProfile(userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const updateUser = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(`${url}/user/edit`, data);
//       dispatch({
//         type: UPDATE_USER,
//         payload: response.data,
//       });
//       console.log('se ejecuto con exitot bbbb')
//     } catch (error) {
//       console.log({ error: error.message });
//     }
//   };
// };

// //-------dashboard------

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

// /* -----------------------------formulario----------------------------- */

// export const formSubscription = (formData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(`${url}`, formData);
//       dispatch({
//         type: FORM_SUBSCRIPTION,
//         payload: response.data,
//       });
//       console.log('funcion mail footer')
//     } catch (error) {
//       console.log("estoy en las actions", error);
//     }
//   };
// };
