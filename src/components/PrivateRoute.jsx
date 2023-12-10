import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Modal, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom"
import { loginUser, signupUser } from '../services/user/action';
import { useDispatch, useSelector } from 'react-redux';
import { LOGGED_IN, LOGOUT_USER } from '../services/user/actionType';

const PrivateRoute = ({ children }) => {
    const loggedIn = useSelector(state=>state.user.loggedIn)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [logging, setLogging] = useState(true)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const error = useSelector(state => state.user.error)
    const loading = useSelector(state => state.user.loading)
    const [alertShow, setAlertShow] = useState(false)
    useEffect(() => {
        if (error)
            setAlertShow(true)
    }, [user, error])
    const [form] = Form.useForm();
    const status = useSelector(state => state.user.status)
    useEffect(() => {
        let id
        if (status === 1) {
            clearTimeout(id)
            id = setTimeout(() => {
                dispatch({type:LOGGED_IN})
            }, 2000)
        }
        return () => clearTimeout(id)
    }, [status])
    const handleLogin = (e) => {
        dispatch(loginUser({ email, password }))
    }
    const handleSignup = (e) => {
        dispatch(signupUser({ username, email, password }))
    }
    const modalStyles = {
        header: {
            textAlign: 'center',
            borderLeft: `5px solid #001529`,
            borderRadius: '15px',
            paddingInlineStart: 5,
            backgroundColor: '#001529'
        },
        body: {
            borderRadius: '15px',
        },
        mask: {
            backdropFilter: 'blur(10px)',
        },
        footer: {
            borderTop: '1px solid #333',
        },
        content: {
            boxShadow: '0 0 30px #999',
            borderRadius: '15px',
        },
    };
    const handleA = () => {
        form.resetFields();
        setAlertShow(false)
        setLogging(prev => !prev)
    }

    const navigate = useNavigate()
    if (!loggedIn) return <Modal
        title={logging ? "Login" : "Signup"}
        open={!loggedIn}
        onOk={() => dispatch({type:LOGGED_IN})}
        onCancel={() => {
            dispatch({type:LOGOUT_USER})
            navigate('/Cryptosphere')
        }}
        footer=""
        styles={modalStyles.content}
        bodyStyle={modalStyles.body}
        headStyle={modalStyles.header}
    >
        <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={logging ? handleLogin : handleSignup}
            autoComplete="off"
        >
            {!logging
                && <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>
            }
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" loading={loading} style={{ borderRadius: '5px' }} htmlType='submit' onClick={logging ? handleLogin : handleSignup}>
                    Submit
                </Button>
                <a style={{ marginLeft: "10px", textDecoration: 'underline' }} onClick={handleA}>{logging ? "Sign up" : "Login"}</a>
            </Form.Item>
        </Form>

        {alertShow && <Alert message={error ? error : "Error"} type="error" showIcon />}
        {status==1 || status==2 && <Alert message={status === 1 ? "Login Successfull" : "Signup Successfull"} type="success" showIcon />}
    </Modal>
    return children
}

export default PrivateRoute