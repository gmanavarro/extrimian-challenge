import { Layout, Typography } from 'antd';
const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntdHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        alt="Extrimian logo"
        src="https://www.extrimian.com/assets/img/extrimian_logo.svg"
        style={{ maxWidth: '15em', position: 'absolute', left: '2em', top: 0 }}
      />
      <Title style={{ color: 'white', margin: 0 }}>Extrimian Challenge</Title>
    </AntdHeader>
  );
};

export default Header;
