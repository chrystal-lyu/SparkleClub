import redux from 'redux';
import firebase, {firebaseRef} from 'app/firebase/';

console.log('Starting redux!')

import * as actions from 'actions';
import store from 'configStore';

store.subscribe(() => {
  var state = store.getState();

  console.log('New State', store.getState());
});

console.log('local initialState =>', store.getState())


firebaseRef.on('value', snapshot => {
  console.log('whats on firebase =>', snapshot.val())
})

// const commentsRef = firebaseRef.child('comments');
// commentsRef.once('value').then((snapshot) => {
//   const comments = snapshot.val() || {};
//   const parsedComments = [];
//   const firstPost = comments["0"]
//   console.log(firstPost);
//
//   Object.keys(firstPost).forEach((commentId) => {
//     parsedComments.push({
//       id: commentId,
//       ...firstPost[commentId]
//     });
//   });
//
//   console.log(parsedComments);
//
// })

// const obj1 = {};
// const array1 = ["a", "b", "c"];
// const array2 = ["x", "y", "z"];
//
// obj1[0] = array1;
// obj1[1] = array2;
//
// console.log(obj1)

const commentsRef = firebaseRef.child(`comments/1`);
commentsRef.once('value').then((snapshot) => {
  const comments = snapshot.val() || {};
  const parsedComments = [];

  Object.keys(comments).forEach((commentId) => {
    parsedComments.push({
      id: commentId,
      ...comments[commentId]
    });
  });

  console.log(parsedComments);

})
