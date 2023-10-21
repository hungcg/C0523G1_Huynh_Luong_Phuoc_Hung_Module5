
import './App.css';
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./css/header.css"
import "./css/body.css"
import List from "../src/components/facility/List"
import {Route, Routes} from "react-router-dom";

let customerList= [
    {

    }
];
function App() {
    return (
        <div className="App">

            <Header/>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<List />} />*/}


            {/*</Routes>*/}
            <Body customer={customerList}/>
            <Footer/>


        </div>

    );
}

export default App;
