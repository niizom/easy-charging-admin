import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import style from './Login.module.scss';

function Login() {
    const error = false;
    const loading = false;
    const handleSubmit = () => {};

    return (
        <div className={style.container}>
            <h1 className={style.pageTitle}>Login</h1>
            <span className={style.description}>Log In to Your Easy Charging Admin Account!</span>
            <Form
                layout="vertical"
                onFinish={handleSubmit}
                className={style.formContainer}
                initialValues={{
                    remember: true
                }}
            >
                {error && <Alert style={{ marginBottom: 20 }} message="Password or email is incorrect" type="error" />}
                <Form.Item
                    label="Email"
                    name="email"
                    className="formInput"
                    rules={[
                        {
                            type: 'email',
                            message: 'Invalid email'
                        },
                        {
                            required: true,
                            message: 'Required field'
                        }
                    ]}
                >
                    <Input size="large" placeholder="teacher@exapmle.com" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    className="formInput"
                    rules={[
                        {
                            required: true,
                            message: 'Required field'
                        }
                    ]}
                >
                    <Input.Password size="large" />
                </Form.Item>
                <Form.Item className="formInput">
                    <Button loading={loading} htmlType="submit" type="primary">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
