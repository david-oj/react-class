import Greeting from "./component/Greeting";
import UserCard from "./component/UserCard";
// import { img1, img2, img3, flower } from "./assets"
import Counter from "./component/Counter";
import TextInput from "./component/TextInput";
import FetchData from "./component/ChangeColor";
import AutoCount from "./component/AutoCount";
import ChangeColor from "./component/ChangeColor";
import Anime from "./pages/anime/Anime";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageLayout from "./component/PageLayout";
import NotFound from "./component/NotFound";
import AnimePage from "./pages/anime/AnimePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/anime/:id" element={ <AnimePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
