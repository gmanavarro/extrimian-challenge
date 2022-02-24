import { Layout, Typography } from 'antd';
const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntdHeader
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        alt="Extrimian logo"
        src="https://www.extrimian.com/assets/img/extrimian_logo.svg"
        style={{ maxWidth: '15em' }}
      />
      <Title style={{ color: 'white', margin: 0, paddingLeft: '3em' }}>
        Extrimian Challenge
      </Title>
    </AntdHeader>
  );
};

export default Header;
