import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import { selectIsAuth } from "./reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";
import Disk from "./components/Disk/Disk";

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {!isAuth && <Navbar />}
        <div className="wrap">
          {!isAuth ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Disk />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
