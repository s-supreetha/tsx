import Styles from '../../styles/Login.module.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, Alert} from 'antd';
import React, { useState } from 'react';
import { Layout, Menu, theme, Image } from 'antd';
const { Header, Content, Footer } = Layout;
import axios from 'axios'
import { useRouter } from 'next/router'

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg,seterrMsg] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const handleSubmit = () => {
    try {
      console.log('in handle submit')
      async function login(): Promise<void> {
        console.log('in login')
        await axios.post('http://localhost:3002/auth/login', { email, password })
          .then((res) => {
            localStorage.setItem('access_token', res.data)
            console.log(res)
            router.push('Layout')
          }).catch(err => { seterrMsg("Error") })
        
      }
      // router.push('Layout')
      login()
      
    }
    catch (err) {
      // console.log(err)
    }
    // router.push('Layout')
  }


  return (
    <Layout className="layout">
      <div >
        <Header className={Styles.header} >
          <Menu />
          <div className={Styles.header_text}> HU PROJECT TRACK</div>
        </Header>
      </div>
      <div className={Styles.side_text}>
        <h1 style={{ fontSize: 49 }}>HU</h1>
        <h3>PROJECT TRACKER</h3>
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
            autoComplete="off"
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}>

            <Form.Item
              name="email"
              label="Username"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input onChange={handleEmailChange} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password onChange={handlePasswordChange} />
            </Form.Item>
            <div className={Styles.btns}>
              <Form.Item >


                <Button htmlType="reset" className={Styles.reset} >
                  Reset
                </Button>
              </Form.Item>
              <Form.Item >
                <Button htmlType="submit" type="primary" className={Styles.confirm} onClick={handleSubmit}>
                  Confirm
                </Button>{
                  errMsg &&  ( <Alert className={Styles.alert} message={errMsg} type="warning" showIcon closable />
                  )
                }

              </Form.Item>
            </div>
            <Form.Item>
              <a href='/ResetPassword' className={Styles.forget}>
                Click here to Reset Password
              </a>
            </Form.Item>
            {/* <Form className={Styles.form_login}
            layout="vertical"
            name="normal_login"

          >
            {/* The color of the text need to be changed to white */}
            {/* <Form.Item
              label="User Name"
              name="username"
              rules={[{ required: true, message: 'This field is mandatory',type: "email"}]}
            >
              <Input onChange={handleEmailChange} />
              <hr className={Styles.hr}/>
            </Form.Item> */}
            {/* The color of the text need to be changed to white */}
            {/* <Form.Item className={Styles.password}
              label="Password"
              name="password"
              rules={[{ required: true, message: 'This field is mandatory' }]}
              >
              <Input.Password  onChange={handlePasswordChange}/>

              <hr className={Styles.hr}/>
            </Form.Item>
            <div className={Styles.btns}>
              <Form.Item >
                <Button htmlType="reset" className={Styles.reset} >
                  Reset
                </Button>
                </Form.Item>
                <Form.Item >
                <Button htmlType="submit" type="primary" className={Styles.confirm} onClick={handleSubmit}>
                  Confirm
                </Button>

              </Form.Item>
            </div>
            <Form.Item>
              <a  href='/ResetPassword' className={Styles.forget}>
                Click here to change password
              </a>
            </Form.Item>
          </Form> */}
          </Form>
        </div>

      </Content>
    </Layout>
  );
};

export default App;