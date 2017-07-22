import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import moment from 'node-moment';
import uuid from 'node-uuid';

import {defaultState} from 'app/store/configStore.jsx';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return state = action.posts
    case 'INCREMENT_LIKES':
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

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    case 'FETCH_COMMENTS':
      return state = action.comments;
      console.log('after fetchComments',state)
    default:
      return state;
  };
};

export const postIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'CURRENT_POST_ID':
      return state = action.id;
      console.log(state);
    default:
      return state;
  }
};


// export const addComments = (state=[], action) => {
//   switch (action.type) {
//     case 'ADD_COMMENTS':
//     console.log("defaultState => ", defaultState);
//       return [
//         defaultState
//       ];
//     default:
//       return state;
//   }
// };

// export const commentsReducer = (state = [], action) => {
//   if(typeof action.postId !== 'undefined') {
//     return{
//       ...state,
//       [action.postId]: postComments(state[action.postId], action)
//     }
//   }
//
//   return state;
// };

const rootReducer = combineReducers({
  posts: postsReducer,
  currentPostId: postIdReducer,
  comments: commentsReducer,
  routing: routerReducer
});

export default rootReducer;
