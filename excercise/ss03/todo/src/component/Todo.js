import React, {Component} from "react";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            item: event.target.value
        });
    }
    handleAddItem = () => {
        let item = this.state.item;
        if (item!=="") {
            this.state.list.push(item)
            this.setState({
                ...this.state,
                list: [...this.state.list],
                item: ""
            })
        }
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <td>List Text</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((list, index) =>(
                        <tr key={index}>
                            <td>{list}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <input value={this.state.item} onChange={(event) => {
                    this.handleChange(event);
                }} type="text"/>
                <button onClick={this.handleAddItem}>Click</button>
            </>
        )
    }
}

export default Todo;
