import { User } from "@auth0/auth0-spa-js";
import axios from "axios";

//actions GET books
export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_DETAIL_BOOK = "GET_DETAIL_BOOK";
export const GET_BOOK_GENRE = "GET_BOOK_GENRE";
export const GET_BOOK_LANGUAGE = "GET_BOOK_LANGUAGE";
export const GET_BOOK_PUBLISHER = "GET_BOOK_PUBLISHER";
export const GET_BOOK_FORMAT = "GET_BOOK_FORMAT";

//actions FILTER books
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_FORMAT = "FILTER_BY_FORMAT";
export const FILTER_BY_LANGUAGE = "FILTER_BY_LANGUAGE";
export const FILTER_BY_PUBLISHER = "FILTER_BY_PUBLISHER";
export const FILTER_COMBINED = "FILTER_COMBINED";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"

//actions Wishlist
export const GET_WISHLIST = "GET_WISHLIST"
export const ADD_BOOK_TO_WISHLIST = "ADD_BOOK_TO_WISHLIST";
export const REMOVE_BOOK_FROM_WISHLIST = "REMOVE_BOOK_FROM_WISHLIST";
// export const CLEAR_WISHLIST = "CLEAR_WISHLIST";

//actions carrito
export const GET_CART = "GET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const POST_PAYMENT = "POST_PAYMENT";

//actions dashboard
export const ADD_PRODUCT = "ADD_PRODUCT";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";
// export const EDIT_PRODUCT = "EDIT_PRODUCT"
// export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_DASHBOARD_USERS = "GET_DASHBOARD_USERS";
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
// export const DELETE_USER = "DELETE_USER";
// export const SUSPEND_USER = "SUSPEND_USER"

//actions users
export const GET_USER= "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const GET_USER_ID = "GET_USER_ID";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USER_ID = "SET_USER_ID";

//actions reviews
export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';

//actions footer
export const FORM_SUSCRIPTION = "FORM_SUBCRIPTION";



export const URL = "https://bookverse-m36k.onrender.com";
//export const URL = "http://localhost:3001";

//------------------------------------books-----------------------------------
export function getAllBooks() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/books/`);
      return dispatch({ type: GET_ALL_BOOKS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
}

export const getDetailBooks = (id) =>{
  return async (dispatch) =>{
    try {
      const response = await axios.get(`${URL}/books/:id`);
      console.log(data);
      return dispatch({type: GET_DETAIL_BOOK, payload: response.data})
    } catch (err) {
      console.log(err);
    }
  }
}

export const getBookGenre = () => {
  return async (dispatch) => {
    const resp = await axios(`${URL}/genre/`);
    return dispatch({ type: GET_BOOK_GENRE, payload: resp.data });
  };
};

export const getBookLanguage = () => {
  return async (dispatch) => {
    const resp = await axios(`${URL}/language/`);
    return dispatch({ type: GET_BOOK_LANGUAGE, payload: resp.data });
  };
};

export const getBookPublisher = () => {
  return async (dispatch) => {
    const resp = await axios(`${URL}/publisher/`);
    return dispatch({ type: GET_BOOK_PUBLISHER, payload: resp.data });
  };
};

export const getBookFormat = () => {
  return async (dispatch) => {
    const resp = await axios(`${URL}/format/`);
    return dispatch({ type: GET_BOOK_FORMAT, payload: resp.data });
  };
};


//------------------------------------filtros y ordenamiento
export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/filter/name?name=${name}`);
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
      const response = await axios.get(`${URL}/filter/byGenre?name=${name}`);
      dispatch({ type: FILTER_BY_GENRE, payload: response.data.filteredByGenre});
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByFormat = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/filter/format?name=${name}`);
      dispatch({ type: FILTER_BY_FORMAT, payload: response.data.filteredByFormat});
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByLanguage = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/filter/language?name=${name}`);
      dispatch({ type: FILTER_BY_LANGUAGE, payload: response.data.filteredLanguage});
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByPublisher = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/filter/publisher?name=${name}`);
      dispatch({ type: FILTER_BY_PUBLISHER, payload: response.data.filteredPublisher});
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCombined = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/filter/combined?${name}`);
      console.log(response.data.books)
      dispatch({ type: FILTER_COMBINED, payload: response.data.books});
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByPrice = (price) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/order/byPrice?price=${price}`);
      dispatch({ type: ORDER_BY_PRICE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByTitle = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/order/byTitle?title=${title}`);
      dispatch({ type: ORDER_BY_TITLE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// ------------------------------------WISHLIST-----------------------------------
export const getWishlist = (user_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/wishlist/${user_id}`);
      dispatch({ type: GET_WISHLIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addWishlist = (user_id, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/wishlist/add?user_id=${user_id}&book_id=${id}`);
      dispatch({ type: ADD_BOOK_TO_WISHLIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeWishlist = (user_id, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URL}/wishlist/remove?user_id=${user_id}&book_id=${id}`);
      dispatch({ type: REMOVE_BOOK_FROM_WISHLIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const clearWishlist = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${URL}`);
//       dispatch({ type: CLEAR_WISHLIST, payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


// ------------------------------------Cart-----------------------------------

export const getCart = (user_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/cart/${user_id}`);
      dispatch({ type: GET_CART, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (user_id, id, quantity) => {
  return async (dispatch) =>{
    try {
      const response = await axios.post(`${URL}/cart/add?user_id=${user_id}&book_id=${id}&quantity=${quantity}`)
      console.log(response.data)
      dispatch({ type: ADD_TO_CART, payload: response.data})
    } catch (error){
      console.log(error);
    }
  }
}

export const deleteCart = (user_id, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URL}/cart/remove?user_id=${user_id}&book_id=${id}`);
      dispatch({ type: DELETE_PRODUCT_CART, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeQuantity = (user_id, id, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${URL}/cart?user_id=${user_id}&book_id=${id}&quantity=${quantity}`);
      dispatch({ type: CHANGE_QUANTITY, payload: response.data });
    } catch (error) {
      console.log(error);  
    }
  };
};

export const deleteAllCart = (user_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${URL}/cart/removeAll?user_id=${user_id}`);
      dispatch({ type: DELETE_ALL_CART, payload: [] });
    } catch (error) {
      console.log(error);
    }
  };
};


// ----------Payment Form
export const postPayment = (user_id) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/payment/create-checkout-session/${user_id}`)
      console.log(response)
      if (response) {
        dispatch({ type: POST_PAYMENT, payload: response.data })
        return response.data;
      } 
    }catch (error) {
      console.log("Error al enviar la información al backend", error)
    }
  }
};


//------------------------------------user-----------------------------------

export const getUser = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/user/email/${email}`);
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
      console.log("se trajo el usuario")
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserId = (email) =>{
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/user/email/${email}`);
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
      const response = await axios.post(`${URL}/user`, newUser);
      console.log(newUser, 'este es el new user')

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
      dispatch(getUser(email));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    console.log(data)
     try {
      const response = await axios.put(`${URL}/user/edit`, data, {

        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
      console.log('se ejecuto con exitot bbbb')
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

//------------------------------------dashboard-----------------------------------

export const addBook = (data) => {
  console.log(data)
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/books/create`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      );
      console.log(data, 'este es el new Book')
      dispatch({
        type: ADD_PRODUCT,
        payload: data,
      });
      console.log('LIBRO CREADO!!!')
    } catch (error) {
      console.log(error);
    }
  };
};


// export const deleteProduct = (product) => {
//   return {
//     type: DELETE_PRODUCT,
//     payload: product,
//   };
// };

// export function getAllOrders() {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`${URL}`);
//       return dispatch({
//         type: GET_ALL_ORDERS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

export const getDashboardUsers = () => async (dispatch) => {
  try {
    
    const response = await axios.get(`${URL}/dashboard/user`);
    console.log('Respuesta del backend:', response.data);

    dispatch({
      type: GET_DASHBOARD_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error al obtener los datos del equipo:', error);
  }
};

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${URL}/dashboard/user/delete/${id}`);
      dispatch(deleteUserSuccess(id));
      console.log("estoy en success id", deleteUserSuccess(id)); 
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
      console.log("estoy en failure", deleteUserFailure(error.message));
    }
  };
};


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
      const response = await axios.post(`${URL}/form/formFooter`, formData);
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

//------------------------------------REVIEWS-----------------------------------


export const addReview = (review) => async (dispatch) => {
  try {
    dispatch({ type: ADD_REVIEW_REQUEST });

    const response = await axios.post(`${URL}/review/post`, review);
    console.log(response.data)
    console.log("estoy en actions", response);
    dispatch({ type: ADD_REVIEW_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_REVIEW_FAILURE, payload: error.message });
  }
};
