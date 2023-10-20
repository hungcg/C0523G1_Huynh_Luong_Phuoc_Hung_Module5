
import './App.css';
import Header from "./components/header";
import "./components/css/header.css"
import "./components/css/body.css"
import Body from "./components/body";
import Footer from "./components/footer";

let customerList= [
    {

    }
];
function App() {
    return (
        <div className="App">

            <Header/>

            <Body customer={customerList}/>

            <Footer/>


        </div>

    );
}

export default App;
