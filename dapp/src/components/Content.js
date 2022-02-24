import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { getMessage, setMessage } from '../services/api';
const { Title } = Typography;

const Content = () => {
  const [messageText, setMessageText] = useState('');
  const [inputValue, setInputValue] = useState(messageText);

  const handleSubmit = async () => {
    await setMessage(inputValue);
    setMessageText(await getMessage());
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10em 10em',
      }}
    >
      <Form style={{ width: '30em', height: '100%' }} name="basic">
        <Form.Item label="Message" name="message">
          <Input onChange={handleInputChange} type="text" />
        </Form.Item>

        <Form.Item>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Click me
          </Button>
        </Form.Item>
        <Title level={3}>Stored message: {messageText}</Title>
      </Form>
    </div>
  );
};

export default Content;
