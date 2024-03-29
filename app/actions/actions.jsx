import moment from 'node-moment';
import uuid from 'node-uuid';
import firebase, {firebaseRef, googleProvider} from 'app/firebase/';
import store from 'configStore';

export const fetchPosts = (posts) => {
  return {
    type: 'FETCH_POSTS',
    posts
  };
};

export const startFetchPosts = () => {
  return (dispatch, getState) => {
    const postsRef = firebaseRef.child('posts');
    return postsRef.once('value').then((snapshot) => {
      const posts = snapshot.val() || {};
      dispatch(fetchPosts(posts));
    });
  };
};

export const increment = (postId) => {
  return {
    type: 'INCREMENT_LIKES',
    postId
  };
};

export const startIncrement = (postId) => {
  return (dispatch) => {
    const postRef = firebaseRef.child(`posts/${postId}`);
    postRef.transaction((post) => {
      if (post) {
        if(post.likes) {
          post.likes++;
        }
      dispatch(increment(postId));
      };
      return post;
    });
  };
};

export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment
  };
};

export const startAddComment = (postId, text) => {
  return (dispatch, getState) => {
    const userName = store.getState().auth.userName;
    const comment = {
      text,
      user: userName ? userName : '匿名用户',
      date: moment().unix()
    };

    firebaseRef.child(`comments/${postId}`).push(comment);
  };
};

export const fetchComments = (comments) => {
  return {
    type: 'FETCH_COMMENTS',
    comments
  };
};

export const startFetchComments = () => {
  return (dispatch, getState) => {
    const commentsRef = firebaseRef.child('comments');
    return commentsRef.once('value').then((snapshot) => {
      const allComments = [];
      for(let i = 0; i < snapshot.val().length; i++) {
        const comments = snapshot.val()[i] || {};
        const parsedComments = [];

        Object.keys(comments).forEach((commentId) => {
          parsedComments.push({
            ...comments[commentId],
            id: commentId
          });
        });
        allComments.push(parsedComments);
      }
      dispatch(fetchComments(allComments));
    });
  };
};

export const removeComment = (postId, commentIndex) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    commentIndex
  };
};

export const startRemoveComment = (postId, commentId, commentIndex) => {
  return (dispatch) => {
    const commentsRef = firebaseRef.child('comments');
    dispatch(removeComment(postId, commentIndex));
    return commentsRef.child(`${postId}/${commentId}`).remove();
  };
};

export const login = (uid, userName) => {
  return {
    type: 'LOGIN',
    uid,
    userName
  };
};

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(googleProvider).then((result) => {
      console.log('Auth worked!', result)
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      alert('You have successfully logged out')
    });
  };
};
