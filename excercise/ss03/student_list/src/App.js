import logo from './logo.svg';
import './App.css';
import StudentInfo from "./component/StudentInfo";


function App() {

    const studentList = [
        {id: 1, name: "Hậu Cẩm Lệ", age: 21, address: " Cẩm Lệ"},
        {id: 2, name: "Thiện Thanh Khê", age: 28, address: " Thanh Khê"},
        {id: 3, name: "Liên Hòa Khánh", age: 27, address: " Hòa Khánh"},
        {id: 4, name: "Thắng Thanh Khê", age: 29, address: " Thanh Khê"},
        {id: 5, name: "Hạnh Huế", age: 31, address: " Thựa Thiên Huệ có Sông Huơng 80m"}
    ]
    return (
        <div>
            <StudentInfo list={studentList}></StudentInfo>
        </div>
    );
}

export default App;
