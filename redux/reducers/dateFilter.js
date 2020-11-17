export const dateFilterReducer = (state = null, action) => {
  switch (action.type) {
    case 'DATE_FILTER':
      return state = action.payload
    default:
      return state;
  }
}