import React, {Component,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalOutlined, MailOutlined, PhoneOutlined,DeleteFilled,HeartOutlined,EditOutlined} from "@ant-design/icons"
import 'antd/dist/antd.css';
import {BsHeart} from "react-icons/bs";

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
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className='ant-row'>
                <div className="ant-col">
                    <div className="ant-card ant-card-bordered" style={{margin: '15px'}}>
                        <div className="ant-card-cover">
                            <div className="card-header">
                                <img
                                    src={`https://avatars.dicebear.com/v2/avataaars/${items.forEach(async (item)=>item.id)}.svg?options[mood][]=happy`}
                                    style={{width: '200px', height: '200px'}}/>
                                {console.log(items.forEach(async (item)=>item.name))}
                            </div>
                        </div>
                        <div className="ant-card-body">
                            <h4>{items.map((item=>item.name))}</h4>
                            <div style={{display: "flex", flexDirection: 'row'}}>
                                <MailOutlined style={{margin: '3px'}}/>
                                <p style={{fontSize: '15px', margin: '1px'}}></p>
                            </div>
                            <div style={{display: "flex", flexDirection: 'row'}}>
                                <PhoneOutlined style={{margin: '3px'}}/>
                                <p style={{fontSize: '15px', margin: '1px'}}>05302125489</p>
                            </div>
                            <div style={{display: "flex", flexDirection: 'row'}}>
                                <GlobalOutlined style={{margin: '3px'}}/>
                                <p style={{fontSize: '15px', margin: '1px'}}>linkedin.com/alpereninci1</p>
                            </div>
                        </div>
                        <div className="ant-card-actions">
                            <li style={{width: '33%'}}>
                                <span>
                                    <button style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        outline: 'none'
                                    }}>
                                        <BsHeart style={{color: 'red', fontSize: '15px'}}></BsHeart>
                                    </button>
                                </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                )
    }


}
export default Users;


