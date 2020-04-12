import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../constants/index'

const initialState = {
  comments: [],
};

const comment = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      const { comments } = action;
      return {
        ...state,
        comments,
      };
    case ADD_COMMENT:
      let { comment } = action;
      return {
        ...state,
        comments: [...state.comments, comment],
      };
    case DELETE_COMMENT:
      comment = action.comment;
      return {
        ...state,
        comments: state.comments.filter((eachComment) => eachComment._id !== comment),
      };
    default:
      return {
        ...state,
      };
  }
};

export default comment;
