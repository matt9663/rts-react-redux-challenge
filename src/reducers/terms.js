const termsReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_TERM':
      console.log(action.term);
      return [...state, action.term];
    default: 
      return state;
  }
}

export default termsReducer;