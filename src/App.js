import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import { selectIsAuth } from "./reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="wrap">
          {!isAuth && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
