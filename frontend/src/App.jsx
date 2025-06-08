import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/HomePage/Home";
import { Logout } from "./pages/Logout";
import { OAuthSuccess } from "./pages/oAuthSuccess";
import { Navbar } from "./components/NavbarComponent/Navbar.jsx";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Partner from "./pages/PartnerPage/Partner.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Invest from "./pages/InvestPage/Invest.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          < Route path = "/logout" element = {<Logout />}/>
          < Route path = "/aboutUs" element = {<AboutUs />}/>
          < Route path = "/contactUs" element = {<ContactUs />}/>
          < Route path = "/invest" element = {<Invest/>}/>
          < Route path = "/partner" element = {<Partner />}/>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
