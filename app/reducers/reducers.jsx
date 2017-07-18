import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import moment from 'node-moment';

export const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes!')
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one we are updating
      ]
    default:
      return state;
  };
};

export const postComments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        {
          user: action.author,
          date: moment().unix(),
          text: action.comment
        },
        ...state
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  };
};

export const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined') {
    return{
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state;
};

const rootReducer = combineReducers({posts, comments, postComments, routing: routerReducer});

export default rootReducer;
