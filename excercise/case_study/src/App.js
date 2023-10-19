import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import "./components/css/header.css"
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div >
                <Footer/>
            </div>


        </div>

    );
}

export default App;
