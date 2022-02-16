import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details/Details";
import Search from "./components/Search/Search";

const App = () => {
   return (
      <BrowserRouter>
         <Search />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
