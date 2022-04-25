import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Interface from './Interface';
import {Spinner} from "react-bootstrap";

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const {DataisLoaded, users} = this.state;
        if (!DataisLoaded) return <div>
            <Spinner name="double-bounce"></Spinner>
            </div>;
        return (
            <div className="ant-row" style={{display:"flex", flexDirection:'row'}}>
                {users.map((user, index) => {
                    return (
                        <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6" key={index}>
                            <Interface user={user}/>
                        </div>
                    );
                })}
            </div>
        )

    }

}
export default Users;


