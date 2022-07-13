  import FavoritePokemons from "../components/FavoritePokemons";
  import UserInfo from "../components/UserInfo";
  import { useEffect, useState } from "react";
  import { useAuthState } from "react-firebase-hooks/auth";
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "../service/firebase";
  import { useNavigate } from "react-router-dom";


  export default function Profile() {
    const [user, setUser] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          navigate("/")
        }
      });
    }, []);

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
