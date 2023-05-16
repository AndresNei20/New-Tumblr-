import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";
import { getAuth, 
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword, 
      onAuthStateChanged, sendPasswordResetEmail
     } from "firebase/auth";

     const firebaseConfig = {
        apiKey: "AIzaSyBnPvLpxfnCNh2qfK6A64Fqajvb0wYkIFg",
        authDomain: "ejemplo-18-f9315.firebaseapp.com",
        projectId: "ejemplo-18-f9315",
        storageBucket: "ejemplo-18-f9315.appspot.com",
        messagingSenderId: "321808444756",
        appId: "1:321808444756:web:2c4b8a421b1cf893e6ecc1"
      };

     const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Andres",
    last: "Neira",
    born: 2004
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});

const auth = getAuth();
/* createUserWithEmailAndPassword(auth, "andresfelipeneira2004@gmail.com", "andres123456")
  .then((userCredential) => {
    // Signed in
    console.log("sign in")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */

  signInWithEmailAndPassword(auth, "andresfelipeneira2004@gmail.com", "andres123456")
  .then((userCredential) => {
    // Signed in
    console.log("log in")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}
sendPasswordResetEmail(auth, "andresfelipeneira2004@gmail.com")
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
