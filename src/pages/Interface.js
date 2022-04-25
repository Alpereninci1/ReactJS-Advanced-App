import {GlobalOutlined, MailOutlined, PhoneOutlined,DeleteFilled,HeartOutlined,EditOutlined} from "@ant-design/icons"
import {Card} from "antd";


export default ({user})=>(
    <div className="ant-card ant-card-bordered" style={{margin:'15px'}}>
        <div className="ant-card-cover">
            <Card className="card">
                <img className="card-header" alt="Avatar" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}/>
                <div className="ant-card-body">
                    <h4>{user.name}</h4>
                    <span className="anticon-icon">
                        <MailOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
                        <p>{user.email}</p>
                    </span>
                    <span className="anticon-icon">
                        <PhoneOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
                        <p>{user.phone}</p>
                    </span>
                    <span className="anticon-icon">
                        <GlobalOutlined style={{ fontSize: "18px", paddingRight: "10px" }} />
                        <p>{user.website}</p>
                    </span>
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
                                <HeartOutlined key="favourites" style={{fontSize:'20px',color:'red'}}></HeartOutlined>
                            </button>
                        </span>
                    </li>
                    <li style={{width: '33%'}}>
                        <span>
                            <button style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                outline: 'none'
                            }}>
                                <EditOutlined key="edit" style={{fontSize:'20px'}}></EditOutlined>
                            </button>
                        </span>
                    </li>
                    <li style={{width: '33%'}}>
                        <span>
                            <button style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                outline: 'none'
                            }}>
                                <DeleteFilled key="delete" style={{fontSize:'20px'}}></DeleteFilled>
                            </button>
                        </span>
                    </li>
                </div>
            </Card>

        </div>
    </div>

);