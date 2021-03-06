import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pokemon-collection-5f6cb.firebaseapp.com",
  projectId: "pokemon-collection-5f6cb",
  storageBucket: "pokemon-collection-5f6cb.appspot.com",
  messagingSenderId: "143742346494",
  appId: "1:143742346494:web:6bfa224193c3d09cc2f1af",
  measurementId: "G-2X0R3VHRWE"
};

const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

async function addFavPokemon(pokemon) {
  try {
    const { currentUser } = await auth;
    const q = query(
      collection(db, "favPokemons"),
      where("pokemonId", "==", pokemon.id)
    );
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "favPokemons"), {
        uid: currentUser.uid,
        pokemonId: pokemon.id,
        name: pokemon.name,
      });
      alert("Successfully added");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

const logout = async () => {
  try {
    await signOut(auth).then(() => {
      console.log("kfhffh");
    });
  } catch (error) {
    console.log(error);
  }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, addFavPokemon, signInWithGoogle, logout };
