import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import moment from 'node-moment';
import uuid from 'node-uuid';

import {defaultState} from 'app/store/configStore.jsx';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return state = action.posts;
    case 'INCREMENT_LIKES':
      const i = action.postId;
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  };
};

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        action.comment,
        ...state
      ];
    case 'REMOVE_COMMENT':
      const postIndex = parseInt(action.postId);
      let copy = Object.assign([], state)
      delete copy[postIndex][action.commentIndex];
      return copy;
    case 'FETCH_COMMENTS':
      return state = action.comments;
      console.log('state after', state)
    default:
      return state;
  };
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        userName: action.userName,
        isUserLoggedIn: true
      }
    case 'LOGOUT':
      return {
        isUserLoggedIn: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
  routing: routerReducer
});

export default rootReducer;
