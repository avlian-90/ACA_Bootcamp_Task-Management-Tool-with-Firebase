import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjje1quPhyj0e7OHbE_WnWkvb3zfvxmEE",
    authDomain: "task-management-3dbc1.firebaseapp.com",
    projectId: "task-management-3dbc1",
    storageBucket: "task-management-3dbc1.appspot.com",
    messagingSenderId: "97552583453",
    appId: "1:97552583453:web:47f0d14e3655fa2d692ff4"
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();

export { projectFireStore };