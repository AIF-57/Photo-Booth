import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./routes/PrivateRoutes";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import NotificationPage from "./pages/NotificationPage";
import PostDetails from "./components/post/PostDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/notification" element={<NotificationPage/>}/>
          <Route path="/post-details/:postId" element={<PostDetails/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
