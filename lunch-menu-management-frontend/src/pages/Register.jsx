import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts';
import useAuth from '../hooks/useAuth';




const Register = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const { auth, setAuth } = useAuth(AuthContext)
    const navigate = useNavigate()



    const onFinish = async (values) => {

        try {

            const response = await axios.post(`http://localhost:5000/api/v1/users/register`, values)
            if (response.status === 200) {

                messageApi.open({
                    type: 'success',
                    content: 'Login Successful',
                });
                navigate('/login')
            }
        } catch (err) {
            if (err) {
                messageApi.open({
                    type: 'error',
                    content: 'Some error occurred',
                });
            }
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='h-full flex justify-center items-center mt-5'>
            {contextHolder}
            <div className="h-1/2 border shadow sm:p-16 p-5 rounded-xl">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Department"
                        name="department"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your department!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Designation"
                        name="designation"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your designation!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};
export default Register;