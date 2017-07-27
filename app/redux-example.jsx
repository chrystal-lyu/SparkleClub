import redux from 'redux';
import firebase, {firebaseRef} from 'app/firebase/';

console.log('Starting redux!')

import * as actions from 'actions';
import store from 'configStore';

firebaseRef.on('value', (snapshot) => {
  store.dispatch(actions.startFetchPosts());
  store.dispatch(actions.startFetchComments());
});

store.dispatch(actions.startIncrement(0));
const likesRef = firebaseRef.child('posts/0/likes');
likesRef.on('value', (snapshot) => {
  console.log(snapshot.val());
  document.getElementById('app').innerHTML = snapshot.val();
})
