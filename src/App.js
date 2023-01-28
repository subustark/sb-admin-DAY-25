import "./css/sb-admin-2.min.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./components/Portal";
import Loginpage from "./components/Loginpage";
import Combuttons from "./components/Combuttons";
import Comcards from "./components/Comcards";
import Ucolors from "./components/Ucolors";
import Uborders from "./components/Uborders";
import Uanimations from "./components/Uanimations";
import Userlist from "./components/Userlist";
import Createuser from './components/Createuser'
import Registerpage from "./components/Registerpage";
import Forgotpassword from "./components/Forgotpassword";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Loginpage />} />
          <Route path="/" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="userlist" element={<Userlist />}></Route>
            <Route path="createuser" element={<Createuser />} />
            <Route path="components/buttons" element={<Combuttons />}></Route>
            <Route path="components/cards" element={<Comcards />}></Route>
            <Route path="utilities/colors" element={<Ucolors />}></Route>
            <Route path="utilities/borders" element={<Uborders />}></Route>
            <Route
              path="utilities/animations"
              element={<Uanimations />}
            ></Route>
        
            <Route path="pages/login" element={<Loginpage />}></Route>
            <Route path="pages/register" element={<Registerpage />}></Route>
            <Route
              path="pages/forgot-password"
              element={<Forgotpassword />}
            ></Route>
            
        
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
