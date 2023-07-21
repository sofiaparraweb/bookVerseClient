// // Importamos las acciones
// import {
//   GET_ALL_BOOKS,
//   GET_DETAIL_BOOK,
//   GET_BOOK_TYPE,
//   GET_ALL_BOOKS_TYPES,
//   FILTER_BY_TYPE,
//   ORDER_BY_PRICE,
//   ORDER_BY_TITLE,
//   ORDER_BY_AUTHOR,
//   SEARCH_BY_NAME,
//   GET_CART,
//   ADD_TO_CART,
//   DELETE_PRODUCT_CART,
//   DELETE_ALL_CART,
//   CHANGE_QUANTITY,
//   POST_PAYMENT,
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   EDIT_PRODUCT,
//   GET_ALL_ORDERS,
//   GET_ALL_USERS,
//   DELETE_USER,
//   SUSPEND_USER,
//   GET_USER,
//   GET_USER_EMAIL,
//   CREATE_USER,
//   GET_USER_ID,
//   UPDATE_USER,
//   SET_USER_ID,
//   FORM_SUBSCRIPTION,
// } from "./actions";

// Estado inicial del reducer
const initialState = {
  books: [],
  bookDetail: null,
  bookTypes: [],
  filteredBooks: [],
  cart: [],
  orders: [],
  users: [],
  userProfile: null,
  userId: null,
  loading: true,
  error: null,
};

// // Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
//     // Actions relacionadas con libros
//     case GET_ALL_BOOKS:
//       return {
//         ...state,
//         books: action.payload,
//         loading: false,
//       };
//     case GET_DETAIL_BOOK:
//       return {
//         ...state,
//         bookDetail: action.payload,
//         loading: false,
//       };
//     case GET_BOOK_TYPE:
//       return {
//         ...state,
//         bookTypes: action.payload,
//         loading: false,
//       };
//     case GET_ALL_BOOKS_TYPES:
//       return {
//         ...state,
//         bookTypes: action.payload,
//         loading: false,
//       };
//     case FILTER_BY_TYPE:
//       return {
//         ...state,
//         filteredBooks: action.payload,
//         loading: false,
//       };
//     case ORDER_BY_PRICE:
//       return {
//         ...state,
//         books: action.payload,
//         loading: false,
//       };
//     case ORDER_BY_TITLE:
//       return {
//         ...state,
//         books: action.payload,
//         loading: false,
//       };
//     case ORDER_BY_AUTHOR:
//       return {
//         ...state,
//         books: action.payload,
//         loading: false,
//       };
//     case SEARCH_BY_NAME:
//       return {
//         ...state,
//         filteredBooks: action.payload,
//         loading: false,
//       };

//     // Actions relacionadas con el carrito
//     case GET_CART:
//       return {
//         ...state,
//         cart: action.payload,
//         loading: false,
//       };
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cart: action.payload,
//         loading: false,
//       };
//     case DELETE_PRODUCT_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//         loading: false,
//       };
//     case DELETE_ALL_CART:
//       return {
//         ...state,
//         cart: [],
//         loading: false,
//       };
//     case CHANGE_QUANTITY:
//       return {
//         ...state,
//         cart: action.payload,
//         loading: false,
//       };
//     case POST_PAYMENT:
//       // Agregar la lógica relacionada con la acción de pago si es necesario
//       return state;

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

//     case GET_USER:
//       // Agregar la lógica relacionada con la acción de obtener usuario si es necesario
//       return state;
//     case GET_USER_EMAIL:
//       // Agregar la lógica relacionada con la acción de obtener usuario por email si es necesario
//       return state;
//     case CREATE_USER:
//       // Agregar la lógica relacionada con la acción de crear usuario si es necesario
//       return state;
//     case GET_USER_ID:
//       // Agregar la lógica relacionada con la acción de obtener ID de usuario si es necesario
//       return state;
//     case UPDATE_USER:
//       // Agregar la lógica relacionada con la acción de actualizar usuario si es necesario
//       return state;
//     case SET_USER_ID:
//       // Agregar la lógica relacionada con la acción de establecer ID de usuario si es necesario
//       return state;

//     // Actions relacionadas con el formulario de suscripción
//     case FORM_SUBSCRIPTION:
//       // Agregar la lógica relacionada con la acción de suscripción si es necesario
//       return state;

    default:
      return state;
  }
};

export default reducer;
