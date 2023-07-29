// Importamos las acciones
import {
  GET_ALL_BOOKS,
  GET_BOOK_GENRE,
  GET_BOOK_LANGUAGE,
  GET_BOOK_PUBLISHER,
  GET_BOOK_FORMAT,
  FILTER_BY_GENRE,
  FILTER_BY_FORMAT,
  FILTER_BY_LANGUAGE,
  FILTER_BY_PUBLISHER,
  FILTER_COMBINED,
  ORDER_BY_PRICE,
  ORDER_BY_TITLE,
//   ORDER_BY_AUTHOR,
   SEARCH_BY_NAME,
  GET_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  DELETE_ALL_CART,
  CHANGE_QUANTITY,
  POST_PAYMENT,
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   EDIT_PRODUCT,
//   GET_ALL_ORDERS,
//   GET_ALL_USERS,
//   DELETE_USER,
//   SUSPEND_USER,
  GET_USER,
  CREATE_USER,
  GET_USER_ID,
  UPDATE_USER,
  SET_USER_ID,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE
} from "./actions";

// Estado inicial del reducer
const initialState = {
  allbooks: [],
  bookGenres: [],
  bookLanguage: [],
  bookPublisher: [],
  bookFormat: [],
  books: [],
  cart: [],
  CartBooks: [],
  orders: [],
  users: [],
  userProfile: null,
  userId: null,
  userInfo: {},
  loading: true,
  error: null,
};

// // Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

//------------------------------------book actions-----------------------------------
//------------------------------------book actions GET
    case GET_ALL_BOOKS:
      return {
        ...state,
        allbooks: action.payload,
        books: action.payload,
        loading: false,
      };
    case GET_BOOK_GENRE:
      return {
        ...state,
        bookGenres: action.payload,
        loading: false,
      };
    case GET_BOOK_LANGUAGE:
      return {
        ...state,
        bookLanguage: action.payload,
        loading: false,
      };
    case GET_BOOK_PUBLISHER:
      return {
        ...state,
        bookPublisher: action.payload,
        loading: false,
      };
    case GET_BOOK_FORMAT:
      return {
        ...state,
        bookFormat: action.payload,
        loading: false,
      };

//------------------------------------book actions FILTER
    case FILTER_BY_GENRE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case FILTER_BY_FORMAT:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case FILTER_BY_LANGUAGE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case FILTER_BY_PUBLISHER:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case FILTER_COMBINED:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case ORDER_BY_PRICE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case ORDER_BY_TITLE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
//     case ORDER_BY_AUTHOR:
//       return {
//         ...state,
//         books: action.payload,
//         loading: false,
//       };
    case SEARCH_BY_NAME:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

//------------------------------------cart actions-----------------------------------//
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case DELETE_ALL_CART:
      return {
        ...state,
        cart: [],
        loading: false,
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case POST_PAYMENT:
      return {
        ...state,
        CartBooks: action.payload,
      };

//     case ADD_PRODUCT:
//       return {
//         ...state,
//         books: action.payload,
//       };
//     case DELETE_PRODUCT:
//       return {
//         ...state,
//         books: action.payload,
//       };
//     case EDIT_PRODUCT:
//       return {
//         ...state,
//         books: action.payload,
//       };
//     case GET_ALL_ORDERS:
//       return {
//         ...state,
//         // books: action.payload,
//       };

//------------------------------------USER actions-----------------------------------
//     case GET_ALL_USERS:
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case DELETE_USER:
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case SUSPEND_USER:
//       return {
//         ...state,
//         users: action.payload,
//       };

    case GET_USER:
      return {
        ...state,
        userProfile: action.payload,
      }
    case CREATE_USER:
      return {
        ...state,
        userProfile: action.payload,
      };
    case GET_USER_ID:
      return {
        ...state,
        userProfile: action.payload,
      }
    case UPDATE_USER:
      return {
        ...state,
        userProfile: action.payload,
      }
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
      case ADD_REVIEW_REQUEST:
        return { ...state, loading: true, error: null };
      case ADD_REVIEW_SUCCESS:
        return { ...state, loading: false, reviews: [...state.reviews, action.payload] };
      case ADD_REVIEW_FAILURE:
        return { ...state, loading: false, error: action.payload };
      
//------------------------------------suscription form-----------------------------------

    default:
      return state;
  }
};

export default reducer;
