import Styles from '../../styles/Login.module.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, } from 'antd';
import React from 'react';
import { Layout, Menu, theme, Image } from 'antd';
const { Header, Content, Footer } = Layout;
import { useState } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [email, setUserName] = useState()
    const [password, setPassword] = useState()
    const [newpass, setNewPass] = useState()
    const [confirm, setConfirm] = useState()
    const router = useRouter()

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        // console.log(email)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // console.log(email)
    };

    const handleNewPassChange = (e) => {
        setNewPass(e.target.value);
        // console.log(email)
    };

    const handleConfirmPassChange = (e) => {
        // setConfirm(e.target.value);
        // console.log(email)
    };

    const handleSubmit = (e) => {
        async function resetPassword() {
            await axios.patch('http://localhost:3002/user/resetPassword', { email: email, oldPassword: password, newPassword: newpass })
                .then((res) => { console.log(res) })
            router.push('/LoginPage')
        }
        resetPassword()
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



            </div>
            <Content className={Styles.contentreset}>
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
                            <Input onChange={handleUserNameChange} />
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
                            <Input.Password onChange={handlePasswordChange}/>
                        </Form.Item>
                        <Form.Item
                            name="newpassword"
                            label="New Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') !== value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password you entered must not be same as the old one!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password onChange={handleNewPassChange}/>
                        </Form.Item>

                        <Form.Item className={Styles.password}
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['newpassword']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newpassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password onChange={handleConfirmPassChange} />
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
              <a  href='/LoginPage' className={Styles.forget}>
                Click here to go to Login Page
              </a>
            </Form.Item>

                    </Form>
                    {/* <Form className={Styles.form_login}
            layout="vertical"
            name="normal_login"
            autoComplete="off"
        //   labelCol={{ span: 10 }}
        //   wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
>
 
            {/* The color of the text need to be changed to white */}
                    {/* <Form.Item
              label="User Name"
              name="username"
              rules={[{
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },]}
              hasFeedback>
              <Input onChange={handleUserNameChange}/>
              <hr className={Styles.hr}/>
            </Form.Item> */}
                    {/* The color of the text need to be changed to white */}
                    {/* <Form.Item className={Styles.password}
              label="Password"
              name="password"
              rules={[ {
                required: true,
                message: 'Please input your password!',
              },]}
              hasFeedback>
              <Input.Password onChange={handlePasswordChange}/>


              <hr className={Styles.hr}/>
            </Form.Item>
            <Form.Item className={Styles.password}
              label="New Password"
              name="newpassword"
              rules={[{
                required: true,
                message: 'Please input your password!',
              },]}
              hasFeedback>
              <Input.Password onChange={handleNewPassChange}/>


              <hr className={Styles.hr}/>
            </Form.Item>
            <Form.Item className={Styles.password}
              label="Confirm Password"
              name="confirmpassword"
              dependencies={['newpassword']}
              rules={[
                { required: true, message: 'This field is mandatory' },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newpassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
            ]}
            hasFeedback>
              <Input.Password onChange={handleConfirmPassChange} />


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
              <a  href='/LoginPage' className={Styles.forget}>
                Click here to go to Login Page
              </a>
            </Form.Item> */}

                    {/* </Form>  */}
                </div>

            </Content>
        </Layout>
    );
};

export default App;