import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

//Import pages
import Home from "./pages/Home";
import Addition from "./pages/Addition";
import Division from "./pages/Division";
import Multiplication from "./pages/Multiplication";
import Soustraction from "./pages/Soustraction";
import Help from "./pages/Help";

import Layout from "./Layout/Layout";


function App() {

    //Create routes
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/addition" element={<Addition />} />
                    <Route path="/soustraction" element={<Soustraction />} />
                    <Route path="/multiplication" element={<Multiplication />} />
                    <Route path="/division" element={<Division />} />
                    <Route path="/help" element={<Help />} />
                </Route>
            </>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
