import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FundList from "./components/FundList";
import {FundingProvider} from "./context/FundingContext";

// import {FundProvider} from "./context/FundContext";

function App() {
  return (
    <Router>
        <FundingProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/fund-list" element={<FundList/>}/>
                </Routes>
            </Layout>
        </FundingProvider>
    </Router>
  );
}

export default App;
