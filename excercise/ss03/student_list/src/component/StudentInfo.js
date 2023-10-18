import React, {Component} from "react";

class studentInfo extends Component {
    render() {
        return (
            <>
                {this.props.id}
                {this.props.name}
                {this.props.age}
                {this.props.address}
            </>
        )
    }
}
export default studentInfo;