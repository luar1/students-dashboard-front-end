import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  Cascader,
  DatePicker,
  Checkbox,
} from "antd";

const CreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const plainOptions = ["Yes", "No", "Working on it"];

  return (
    <Modal
      visible={visible}
      title="Mentor Session"
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
      
        <Form.Item label="Mentor">
          <Cascader
            options={[
              {
                value: "mentor1",
                label: "Jared Siirila",
                children: [
                  {
                    value: "schedule1",
                    label: "Thursday, 8:30 PM EST 5:30 PM PST",
                  },
                  {
                    value: "schedule2",
                    label: "Sunday, 3:30 PM EST 12:30 PM PST",
                  },
                ],
              },
              {
                value: "mentor2",
                label: "Gaetan Siry",
                children: [
                  {
                    value: "schedule3",
                    label: "Wednesday, 5:00 PM EST 2:00 PM PST",
                  },
                  {
                    value: "schedule4",
                    label: "Saturday, 1:00 PM EST 10:00 AM PST",
                  },
                ],
              },
              {
                value: "mentor3",
                label: "Dan Gilday",
                children: [
                  {
                    value: "schedule5",
                    label: "Friday, 10:00 PM EST 7:00 PM PST",
                  },
                ],
              },
              {
                value: "mentor4",
                label: "Jamie Hand",
                children: [
                  {
                    value: "schedule6",
                    label: "Sunday, 5:00PM EST 2:00PM PST",
                  },
                ],
              },
              {
                value: "mentor5",
                label: "Chuck",
                children: [
                  {
                    value: "schedule7",
                    label: "Monday, 8:00 PM EST 5:00PM PST",
                  },
                ],
              },
              {
                value: "mentor6",
                label: "Ramiro",
                children: [
                  {
                    value: "schedule8",
                    label: "Tuesday, 8:00 PM EST 5:00PM PST",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Type">
          <Select>
            <Select.Option value="regularsession">Mentor Session</Select.Option>
            <Select.Option value="1on1">1 on 1</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Have you started the assignment? ">
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Yes"]}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Any questions or topics would you like to discuss at the session?"
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const MentorForm = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>

      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Here
      </Button>
      <CreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default MentorForm;
