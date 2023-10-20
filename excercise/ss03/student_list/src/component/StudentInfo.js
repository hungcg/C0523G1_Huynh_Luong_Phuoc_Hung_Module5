import React, {Component} from "react";

class StudentInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Student List</h1>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.map((e, index) => {
                        return (
                            <tr key={e.id}>
                                <td>{index + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.address}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default StudentInfo;