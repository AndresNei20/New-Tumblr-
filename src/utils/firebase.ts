import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseconfig";
import { getFirestore, collection, doc, onSnapshot, addDoc, getDocs, query, orderBy, setDoc } from "firebase/firestore";
import {  Product } from "../types/product";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from "firebase/auth";
import { User } from "../types/User";
import { appState } from "../store";
import { Post } from "../types/Post";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    console.log("ERROR AL REGISTRAR")
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

const AddPostDB = async (post: Post) =>{
  try {
  const where = collection(db, "posts")
    await addDoc(where,{...post, createdAt: new Date()});
    return true
  } catch (e) {
    console.error("Error adding document: ", e);
    return false
  }
}

const GetPostsDB = async(): Promise<Post[]> =>{
  const resp: Post[] = [];

  const q=query(collection(db,"posts"), orderBy("createdAt"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data()
    }as Post)
  });
  return resp
}

const GetPostsListener = (cb: (docs: Post[]) => void) => {
  const q = query(collection(db, "posts"), orderBy("createdAt")); 
  onSnapshot(q, (collection) => {
    const docs: Post[] = collection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[];
    cb(docs);
  });
};


const AddUserToDB = async(user: User) => {
  try{
    const where = collection(db, "users")
      await addDoc(where,{...user, createdAt: new Date()});
      return true
  } catch (e) {
    console.error("error adding document: ", e)
    return false
  }
}

const EditUserDB = async (user: User) =>{
  try {
    await setDoc (doc(db, "users", appState.userData.uid), {
      id: appState.userData.uid,
      username: appState.userData.username,
      email: appState.userData.email,
      password: appState.userData.password,
      img: appState.userData.img,
    })
    return true
  } catch (e) {
    console.error("Error editing document: ", e);
    return false
  }
}

const AddFavoriteDB = async (favorite: Post) =>{
  try {
    const main = collection(db, "users", appState.userData.uid)
  const where = collection(main, "favorites") 
  await addDoc(where,{...favorite, createdAt: new Date()});
    return true
  } catch (e) {
    console.error("Error adding document: ", e);
    return false
  }
}

const GetFavoritesDB = async(): Promise<Post[]> =>{
  const resp: Post[] = [];

  const main = collection(db, "users", appState.userData.uid)
  const q=query(collection(main,"favorites"), orderBy("createdAt"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data()
    }as Post)
  });
  return resp
}


const GetFavoritesListener = (cb: (docs: Post[]) => void) => {
  const main = collection(db, "users", appState.userData.uid)
    const q = query(collection(main, "favorites"), orderBy("createdAt")); 
    onSnapshot(q, (collection) => {
      const docs: Post[] = collection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      cb(docs);
    });
  };

export {auth}
export {db}
export default {
  registerUser,
  loginUser,
  onAuthStateChanged,
  AddUserToDB,
  EditUserDB, 
  AddFavoriteDB,
  GetFavoritesDB,
  GetFavoritesListener,
  AddPostDB,
  GetPostsDB,
  GetPostsListener
};