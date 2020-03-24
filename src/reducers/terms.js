const termsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_TERM':
      return [...state, action.term];
    default: 
      return state;
  }
}

export default termsReducer;