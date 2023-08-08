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
  GET_WISHLIST,
  ADD_BOOK_TO_WISHLIST,
  REMOVE_BOOK_FROM_WISHLIST,
  SEARCH_BY_NAME,
  GET_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  DELETE_ALL_CART,
  CHANGE_QUANTITY,
  POST_PAYMENT,
  ADD_PRODUCT,
  GET_BOOKS_DASHBOARD,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
//   EDIT_PRODUCT,
//   GET_ALL_ORDERS,
   GET_DASHBOARD_USERS,
   DELETE_USER_SUCCESS,
  //  RESTORE_PRODUCT, 
   DELETE_USER_FAILURE,
//   DELETE_USER,
//   SUSPEND_USER,
  GET_BALANCE,
  GET_TRANSACTIONS,
  GET_ALL_SALES,
  GET_SALES_AMOUNT,
  GET_SALES_BY_PUBLISHER,
  GET_SALES_BY_GENRE,
  GET_SALES_BY_LANGUAGE,
  GET_USER,
  CREATE_USER,
  GET_USER_ID,
  UPDATE_USER,
  SET_USER_ID,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
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
  wish: [],
  CartBooks: [],
  orders: [],
  users: [],
  userProfile: null,
  userId: null,
  loading: true,
  error: null,
  grid_view: true,
  products: [],
  reviews: [],
  balance: [],
  transactions: [],
  publisherStats: [],
  genreStats: [],
  teamData: [],
};

// // Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

//------------------------------------book actions-----------------------------------
//------------------------------------book actions GET
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
        allbooks: action.payload,
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
/*     case FILTER_BY_GENRE:
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
      };*/
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
    case SEARCH_BY_NAME:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

//------------------------------------Wishlist-----------------------------------//
    case GET_WISHLIST:
      return {
        ...state,
        wish: action.payload,
        loading: false,
      }
    case ADD_BOOK_TO_WISHLIST:
      return {
        ...state,
        wish: action.payload,
        loading: false,
      };
    case REMOVE_BOOK_FROM_WISHLIST:
      return {
        ...state,
        wish: state.wish?.filter((item) => item.id !== action.payload),
        loading: false,
      }

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

//------------------------------------DASHBOARD actions-----------------------------------//
    case GET_BOOKS_DASHBOARD:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        products: state.products.filter((user) => user.id !== action.payload),
      };
    case DELETE_BOOK_FAILURE:
      return state;

    case ADD_PRODUCT:
      return {
        ...state,
        // allbooks: [...allBooks, action.payload],
        books: [...state.books, action.payload],
      };
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
    case GET_BALANCE:
      return{
        ...state,
        balance: action.payload
      };
    case GET_TRANSACTIONS:
      return{
        ...state,
        transactions: action.payload
      };
    case GET_ALL_SALES: 
      return{
        ...state,
        stats: action.payload
      };
    case GET_SALES_AMOUNT:
      return{
        ...state,
        stats: action.payload
      };
    case GET_SALES_BY_PUBLISHER:
      return{
        ...state,
        publisherStats: action.payload
      };
    case GET_SALES_BY_GENRE:
      return{
        ...state,
        genreStats: action.payload
      };
    case GET_SALES_BY_LANGUAGE:
      return{
        ...state,
        stats: action.payload
      };
      case GET_DASHBOARD_USERS:
        return {
          ...state,
          teamData: action.payload,
        };
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
        userId: action.payload,
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

//------------------------------------suscription form-----------------------------------
//===========>>>reviews<<<============//  
    case ADD_REVIEW_REQUEST:
      return { ...state, loading: true, error: null };

    case ADD_REVIEW_SUCCESS:
      return { ...state, loading: false, reviews: [...state.reviews, action.payload] };
      
    case ADD_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload };   
    default:
      return state;
    }
  };

export default reducer;
