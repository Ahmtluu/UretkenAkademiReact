import "./App.css";
import Home from "./Pages/Home";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Profile from "./Pages/Profile";
import DetailPage from "./Pages/DetailPage";
import { auth } from "./service/firebase";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="profile" element={<Profile user={auth} />} />
          <Route exact path="/pokemon/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
