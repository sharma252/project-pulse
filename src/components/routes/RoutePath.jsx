import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import SinglePost from "../singlePost/SinglePost";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../../pages/about/AboutUs";
import BlogsPage from "../posts/BlogsPage";
import ContactUs from "../../pages/contact/ContactUS";
import WriteBlog from "../../pages/write/WriteBlog";

export default function RoutePath() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/write" element={<WriteBlog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}
