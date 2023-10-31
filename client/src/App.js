import Home from "./Pages/Home/Home";
import "./colors.css"
import NavbarS from "../../client/src/Shared/NavbarS";
import FooterS from "../../client/src/Shared/FooterS";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import Main from "./Pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    element={
                        <div className="scroll-smooth antialiased">
                            {" "}
                            <div className="w-full  fixed  top-0 z-40">
                                <NavbarS />
                            </div>
                            <Outlet />
                            <div className=" ">
                                {" "}
                                <FooterS />
                            </div>
                        </div>
                    }
                >
                    <Route element={<Main />} exact path="/" />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
