import {FundingProvider} from "./context/FundingContext";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import FundList from "./components/FundList";

export default function AppRoutes() {
    return(
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
    )
}