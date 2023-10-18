import logo from './logo.svg';
import './App.css';

const studentList = [
    {id: 1, name: "Hậu Cẩm Lệ", age: 21, address: " Cẩm Lệ"},
    {id: 2, name: "Thiện Thanh Khê", age: 28, address: " Thanh Khê"},
    {id: 3, name: "Liên Hòa Khánh", age: 27, address: " Hòa Khánh"},
    {id: 4, name: "Thắng Thanh Khê", age: 29, address: " Thanh Khê"},
    {id: 5, name: "Hạnh Huế", age: 31, address: " Thựa Thiên Huệ có Sông Huơng 80m"}
]

function App() {
    return (
        <>
            <h1>Student List</h1>
            <table>
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {studentList.map((e, index) => {
                    return (
                        <tr key={e.id}>
                            <td>{index + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.address}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </>
    );
}

export default App;
