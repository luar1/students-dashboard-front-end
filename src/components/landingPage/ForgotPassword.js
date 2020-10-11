import React, { useState } from 'react';
import { Button, Modal, Form, Input, Row } from 'antd';

const ForgotPasswordForm = ({ visible, message, onSubmit, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Forgot Password"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      { message ? message.error :
        <>
          <Row type="flex" align="center" >
            Enter your user account's verified email address and we will send you a password reset link.
      </Row>
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              modifier: 'public',
            }}
          >
            <Form.Item
              name="email"
              style={{ paddingTop: "10px" }}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your email',
                }
              ]}
            >
              <Input placeholder="johndoe@email.com" />
            </Form.Item>
          </Form>
        </>
      }
    </Modal>
  );
};

const ForgotPassword = () => {
  const [state, setState] = useState({ visible: false, email: null, message: null });
  const { visible, email, message } = state;

  const onSubmit = async (email) => {
    console.log('Received values of form: ', email);
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(email),
        headers: { "Content-Type": "application/json" }
      });
      const message = await res.json();
      console.log(message)
      setState({ visible: true, email, message });
    } catch (e) {
      console.log(e.message)
    }
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setState({ visible: true });
        }}
      >
        Forgot Password
      </Button>
      <ForgotPasswordForm
        message={message}
        email={email}
        visible={visible}
        onSubmit={onSubmit}
        onCancel={() => {
          setState({ visible: false, message });
        }}
      />
    </div>
  );
};


export default ForgotPassword;