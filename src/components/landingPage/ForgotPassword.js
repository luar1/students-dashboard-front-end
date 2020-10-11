// import React, { useState, useRef } from 'react';
// import { Button, Modal, Form, Input, Row } from 'antd';

// const layout = {
//   wrapperCol: {
//     span: 24,
//   },
// };

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const ForgotPassword = () => {
//   const [state, setState] = useState({ ModalText: 'Content of the modal', visible: false, email: null });
//   const [form] = Form.useForm();
//   const { ModalText, visible, email } = state;

//   console.log(state)

//   const onChange = (e) => {
//     setState({ email: e.target.value, visible: true });
//   }

//   const onSubmit = (e) => {
//     console.log(e)
//     setState({ visible: false });
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const showModal = () => {
//     setState({ visible: true });
//   };

//   const handleOk = () => {
//     setState({
//       ModalText: 'The modal will be closed after two seconds',
//       confirmLoading: true,
//     })
//   };

//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setState({
//       visible: false,
//     });
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal with async logic
//         </Button>
//       <Modal
//         title="Forgot Password"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" onClick={handleCancel}>
//             Cancel
//         </Button>,
//           <Button key="submit" type="primary" form="forgotPasswordForm" onClick={onSubmit}>
//             Submit
//         </Button>,
//         ]}
//       >
//         <Row type="flex" justify="center" >
//           <Row type="flex" align="center" >
//             Enter your user account's verified email address and we will send you a password reset link.
//           </Row>
//           <Form
//             {...layout}
//             id="forgotPasswordForm"
//             name="basic"
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={onSubmit}
//             onFinishFailed={onFinishFailed}
//           >
//             <Form.Item
//               name="email"
//               form={form}
//               rules={[
//                 {
//                   type: 'email',
//                   message: 'The input is not valid E-mail!',
//                 },
//                 {
//                   required: true,
//                   message: 'Please input your E-mail!',
//                 }
//               ]}
//             >
//               <Input name="email" value={email} placeholder="Enter email" onChange={onChange} />
//             </Form.Item>
//             {/* <Form.Item {...tailFormItemLayout}>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item> */}
//           </Form>
//         </Row>
//       </Modal>
//     </>
//   );
// }

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

  // const onChange = () => {
  //   setState({ visible: false, email });
  // }

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