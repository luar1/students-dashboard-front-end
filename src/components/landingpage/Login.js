import React, { useState, useContext } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthContext from '../contexts/AuthContext';
import 'antd/dist/antd.css';

import './index.css';
import { LOGIN_LINK } from '../../constants/constants';
import ForgotPassword from './ForgotPassword';

const Login = ({ history }) => {
	const [state, setState] = useState({ email: null, password: null, user: null, loading: null });
	const { email, password, user, loading } = state;
	const [authUser, setAuthUser] = useContext(AuthContext);

	const onFinish = async (values) => {
		try {
			setState({ loading: true });
			const res = await fetchData(values);
			setState({ values, user: res, loading: false });
			if (res.hasOwnProperty('token')) {
				setAuthUser(res.token)
				history.push('/home');
			}
		} catch (e) {
			console.log(e.message);
		}
	};

	console.log(state);

	async function fetchData(values) {
		try {
			const response = await fetch(LOGIN_LINK, {
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
						name='email'
						rules={[
							{
								required: true,
								message: 'Enter a valid email address'
							}
						]}
						help={user ? user.error : null}
					>
						<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='email' />
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
