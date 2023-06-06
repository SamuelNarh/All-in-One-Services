import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore()

firestore.collection('users').doc('kHrYHzOKzcrDpdS8Bl5Y').collection('CartItems').doc('eo8kcPmH4iu5v5kDqmFA')
firebase.doc('/users/kHrYHzOKzcrDpdS8Bl5Y/CartItems/eo8kcPmH4iu5v5kDqmFA'); //query to get the document of CartItems
firebase.collection('/users/kHrYHzOKzcrDpdS8Bl5Y/CartItems') //query to get the collection CartItems
