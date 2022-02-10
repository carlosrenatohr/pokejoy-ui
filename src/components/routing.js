import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Pokemon from "./pokemon";

function RoutingTree() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<Pokemon />} />
            <Route path="me" element={<Home />} />
          </Routes>
    );
}

export default RoutingTree;
