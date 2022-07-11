import FavoritePokemons from "../components/FavoritePokemons";
import UserInfo from "../components/UserInfo";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/firebase";

export default function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, [user]);

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="profile-page ">
          <UserInfo user={user} />
          <FavoritePokemons user={user} />
        </div>
      </div>
    </div>
  );
}
