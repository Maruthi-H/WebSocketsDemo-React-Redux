const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WORKFLOWS':
      return { ...state, loading: true };
    case 'WORKFLOWS_RECEIVED':
      debugger;
      return { ...state, workflows: action.workflows, loading: false }
    default:
      return state;
  }
};

export default reducer;
