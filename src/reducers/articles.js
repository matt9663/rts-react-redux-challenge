const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_ARTICLES':
      return [...action.articles];
    default:
      return state;
  }
}

export default articlesReducer;