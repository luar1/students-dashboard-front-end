import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import './index.css';
import ForgotPassword from './ForgotPassword';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

const Login = ({ history }) => {
	const [state, setState] = useState({ username: null, password: null, message: null, loading: null });
	const { username, password, message, loading } = state;
	const onFinish = async (values) => {
		try {
			setState({ loading: true });
			const message = await fetchData(values);
			setState({ values, message, loading: false });
			console.log(message);
			history.push('/home');
		} catch (e) {
			console.log(e.message);
		}
	};

	console.log(state);

	async function fetchData(values) {
		try {
			const response = await fetch('https://reqres.in/api/login', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: { 'Content-Type': 'application/json' }
			});
			const message = await response.json();
			return message;
		} catch (error) {
			console.log('error');
		}
	}

	return (
		<div className='col-4 contain'>
			<h1>Welcome!</h1>
			<div className='col-10 mx-auto'>
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[
							{
								required: true,
								message: 'Enter a valid email address'
							}
						]}
						help={message ? message.error : null}
					>
						<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='username' />
					</Form.Item>
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Enter your password'
							}
						]}
					>
						<Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='password' />
					</Form.Item>
					<Form.Item>
						<div className='login-form-forgot '>
							<ForgotPassword />
						</div>
					</Form.Item>
					<Form.Item hasFeedback validateStatus={loading ? 'validating' : null}>
						<Button type='primary' htmlType='submit' className='login-form-button button-hover' id='validating'>
							Login
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};
export default Login;
