import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Alert } from 'antd';

import { setToken } from '../../redux/slicers/auth';
import requests from '../../services/requests';
import style from './Login.module.scss';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const { mutate } = useMutation(requests.auth.login, {
        onSuccess: ({ data }) => {
            setLoading(false);
            dispatch(setToken(data));
            history.push('/');
        },
        onError: () => {
            setLoading(false);
            setError(true);
        }
    });

    const handleSubmit = value => {
        setLoading(true);
        mutate(value);
    };

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
                {error && (
                    <Alert style={{ marginBottom: 20 }} message="Password or username is incorrect" type="error" />
                )}
                <Form.Item
                    label="Username"
                    name="username"
                    className="formInput"
                    rules={[
                        {
                            required: true,
                            message: 'Required field'
                        }
                    ]}
                >
                    <Input size="large" placeholder="" />
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
