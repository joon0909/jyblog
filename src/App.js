import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import LeftSideBar from "./component/LeftSideBar";
function App() {
    return (
        <div className="App">
            <LeftSideBar></LeftSideBar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
