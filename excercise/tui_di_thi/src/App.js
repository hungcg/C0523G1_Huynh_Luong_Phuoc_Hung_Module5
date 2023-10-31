import './App.css';
import List from "./component/List";
import {Route, Routes} from "react-router-dom";
import Create from "./component/Create";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {Edit} from "./component/Edit";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
