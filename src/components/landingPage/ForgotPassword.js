import React, { useState, useRef } from 'react';
import { Button, Modal, Form, Input, Row } from 'antd';

const layout = {
  wrapperCol: {
    span: 24,
  },
};

const ForgotPassword = () => {
  const [state, setState] = useState({ ModalText: 'Content of the modal', visible: false, confirmLoading: false, });
  const stateRef = useRef(state);
  stateRef.current = state;
  const { ModalText, visible, confirmLoading } = state;

  console.log(state)

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setState({ visible: true });
  };

  const handleOk = () => {
    setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    })
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setState({
      visible: false,
    });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
        </Button>
      <Modal
        title="Forgot Password"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Row type="flex" justify="center" >
          <Row type="flex" align="center" >
            Enter your user account's verified email address and we will send you a password reset link.
          </Row>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
          </Form>
        </Row>
      </Modal>
    </>
  );
}

// class ForgotPassword extends React.Component {
//   state = {
//     ModalText: "Content of the modal",
//     visible: false,
//     confirmLoading: false
//   };

//   showModal = () => {
//     this.setState({
//       visible: true
//     });
//   };

//   handleOk = () => {
//     this.setState({
//       ModalText: "The modal will be closed after two seconds",
//       confirmLoading: true
//     });
//     setTimeout(() => {
//       this.setState({
//         visible: false,
//         confirmLoading: false
//       });
//     }, 2000);
//   };

//   handleCancel = () => {
//     console.log("Clicked cancel button");
//     this.setState({
//       visible: false
//     });
//   };

//   render() {
//     const {visible, confirmLoading, ModalText} = this.state;
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal with async logic
//         </Button>
//         <Modal
//           title="Title"
//           visible={visible}
//           onOk={this.handleOk}
//           confirmLoading={confirmLoading}
//           onCancel={this.handleCancel}
//         >
//           <p>{ModalText}</p>
//         </Modal>
//       </>
//     );
//   }
// }

export default ForgotPassword;