import React, { useState } from 'react'
import { Button, Modal, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [logging, setLogging] = useState(true)
    const handleLogin = () => {

    }
    const handleSignup = () => {

    }
    const modalStyles = {
        header: {
            textAlign: 'center',
            borderLeft: `5px solid #001529`,
            borderRadius: 0,
            paddingInlineStart: 5,
        },
        body: {
            boxShadow: 'inset 0 0 5px #999',
            borderRadius: 5,
        },
        mask: {
            backdropFilter: 'blur(10px)',
        },
        footer: {
            borderTop: '1px solid #333',
        },
        content: {
            boxShadow: '0 0 30px #999',
        },
    };
    const navigate = useNavigate()
    if (!loggedIn) return <Modal
        title={logging ? "Login" : "Signup"}
        open={!loggedIn}
        onOk={() => setLoggedIn(true)}
        onCancel={() => {
            setLoggedIn(false);
            navigate('/Cryptosphere')
        }}
        footer=""
        styles={modalStyles}
    >
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {logging
                && <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
            }
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={logging?handleLogin:handleSignup}>
                    Submit
                </Button>
                <a style={{marginLeft:"10px",textDecoration:'underline'}} onClick={()=>setLogging(prev=>!prev)}>{logging?"Sign up":"Login"}</a>
            </Form.Item>
        </Form>

    </Modal>
    return children
}

export default PrivateRoute