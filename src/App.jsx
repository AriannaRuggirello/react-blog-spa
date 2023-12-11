import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import DefaultLayout from "./pages/DefaultLayout";

function App() {

return (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        
      
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;