import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Model3 from "./Pages/Model3";
import Modelx from "./Pages/Modelx";
import Error from "./Pages/Error";
import Header from "./Components/Header";

function App() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Header />} >
              <Route path="Models" element={<Models />} />
              <Route path="model3" element={<Model3 />} />
              <Route path="modelx" element={<Modelx />} />
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
