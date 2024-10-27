import { Button, NavbarBrand } from "flowbite-react";
import NavbarComp from "./components/compnoents_1/NavbarComp";
import HeroComp from "./components/compnoents_1/HeroComp";
import CardComp from "./components/compnoents_1/CardComp";
import FooterComp from "./components/compnoents_1/FooterComp";
import { Routes, Route , Link, useLocation} from "react-router-dom";
import YoutubePage from "./pages/YoutubePage";
import { InstaPage } from "./pages/InstaPage";
import TwitterPage from "./pages/TwitterPage";
import TiktokPage from "./pages/TiktokPage";

function App(){
  const location = useLocation();
  const isHomePage  = location.pathname === "/"
  return (
    <>
    {isHomePage && <NavbarComp/>}
    {isHomePage && <HeroComp/>}
    {isHomePage && <CardComp/>}
    <Routes>
      <Route path="/youtube" element={<YoutubePage/>}></Route>
      <Route path="/insta" element={<InstaPage/>}></Route>
      <Route path="/twitter" element={<TwitterPage/>}></Route>
      <Route path="/tiktok" element={<TiktokPage/>}></Route>
    </Routes>
   {isHomePage && <FooterComp/>}
    </>
  )
}

export default App;