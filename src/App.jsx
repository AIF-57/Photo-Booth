import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Register/>} />
        <Route path="/me" element={<ProfilePage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
