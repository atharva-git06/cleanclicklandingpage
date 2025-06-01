import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Logout } from "./pages/Logout";
import { OAuthSuccess } from "./pages/oAuthSuccess";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          < Route path = "/logout" element = {<Logout />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
