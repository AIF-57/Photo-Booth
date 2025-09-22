import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./routes/PrivateRoutes";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
