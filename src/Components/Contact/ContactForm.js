import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const ContactForm = () => (
  <Form
    {...layout}
    size='middle'
    name='nest-messages'
    onFinish={onFinish}
    style={{
      maxWidth: 1200,
    }}
    validateMessages={validateMessages}>
    <Form.Item
      name={["user", "Your name"]}
      label='Your name'
      rules={[
        {
          required: true,
        },
      ]}>
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "Email"]}
      label='Email'
      rules={[
        {
          type: "email",
        },
      ]}>
      <Input />
    </Form.Item>
    <Form.Item name={["user", "Subject"]} label='Subject'>
      <Input />
    </Form.Item>
    <Form.Item name={["user", "Message"]} label='Message'>
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default ContactForm;
