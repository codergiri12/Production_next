const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
