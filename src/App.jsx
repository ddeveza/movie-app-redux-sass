import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
    return (
        <div className="App">
            <Router>
                <Header>Header</Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:imdbID" element={<MovieDetail />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer>Footer</Footer>
            </Router>
        </div>
    );
}

export default App;
