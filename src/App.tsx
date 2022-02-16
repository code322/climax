import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details/Details";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
