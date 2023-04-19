import Styles from '@/styles/login.module.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, } from 'antd';
import React from 'react';
import { Layout, Menu, theme, Image } from 'antd';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <div >
        <Header className={Styles.header} >
          <Menu />
          <div className={Styles.header_text}> HU PROJECT TRACK</div>
        </Header>
      </div>
      <div className={Styles.side_text}>
        <h1 style={{ fontSize: 49 ,margin:0}}>HU</h1>
        <h3 style={{margin:0}}>PROJECT TRACKER</h3>
      </div>
      <div className={Styles.side_img} >
        <Image src={`/undrawSE.png`} alt="Undraw Software Engineer" width={380} height={277}
        />
      </div>
      <div >

        <Avatar className={Styles.login_logo} size={186} icon={<UserOutlined />} />

      </div>
      <Content className={Styles.content}>
        <div >
          <Form className={Styles.form_login}
            layout="vertical"
            name="normal_login"
            initialValues={{ remember: true }}

          >
            {/* The color of the text need to be changed to white */}
            <Form.Item
              label="User Name"
              name="username"
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Input />
              <hr className={Styles.hr}/>
            </Form.Item>
{/* The color of the text need to be changed to white */}
            <Form.Item className={Styles.password}
              label="Password"
              name="password"
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Input.Password />

              <hr />
            </Form.Item>
            <div className={Styles.btns}>
              <Form.Item >
                <Button htmlType="button" className={Styles.reset} >
                  Reset
                </Button>
                </Form.Item>
                <Form.Item >
                <Button htmlType="submit" type="primary" className={Styles.confirm}>
                  Confirm
                </Button>

              </Form.Item>
            </div>
            <Form.Item>
              <a className={Styles.forget}>
                Click here to change password
              </a>
            </Form.Item>
          </Form>
        </div>

      </Content>
    </Layout>
  );
};

export default App;
