import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import List from "./pages/list/list";
import New from "./pages/New/New";
import Single from "./pages/single/single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs } from "./formSource";
import { userInputs } from "./formSource"
import"./style/dark.scss";

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="users">
              <Route index element={< List />} />
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" 
              element={<New inputs={userInputs} title="Add New USer" />}/>
            </Route>
            <Route path="products">
              <Route index element={< List />} />
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
