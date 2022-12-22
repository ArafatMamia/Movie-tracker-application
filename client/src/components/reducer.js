export const initialState = {
  basket:[]
};

const reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case "CURRENT ID":
      return {
        basket: [ action.item],
      };
    default:
      return state;
  }
};
export default reducer;