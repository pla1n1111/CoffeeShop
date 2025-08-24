import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from "../spinner/spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const OurCoffee = lazy(() => import('../pages/OurCoffee'));
const Pleasure = lazy(() => import('../pages/Pleasure'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
// const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () =>  {

    return (
        <Router>
            <div className="app">
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/ourcoffee" element={<OurCoffee/>}/>
                            <Route path="/pleasure" element={<Pleasure/>}/>
                            {/* <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/> */}
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;