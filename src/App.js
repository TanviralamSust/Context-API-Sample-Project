import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FundList from "./components/FundList";

function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/fund-list" element={<FundList/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
