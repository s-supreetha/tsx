import Styles from '@/styles/resetPassword.module.css'
import { UserOutlined} from '@ant-design/icons';
import { Alert, Avatar, Button, ConfigProvider, Form, Input, Result, } from 'antd';
import React, { useState } from 'react';
import { Layout, Menu, Image } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

const ResetPassword: React.FC = () => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  }

   // Password verification
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [pwdConf,setPwdConf] = useState("");

  const checkPassword = () => {
    if (password !== 'abcde') {
      setErrorMsg('Incorrect Password or Username!')
      setPwdConf('')
      return
    }
    setPwdConf('Success')
    setErrorMsg('')

  }


  return (
    <Layout className="layout">

      {/* header */}

      <div >
        <Header className={Styles.header} >
          <Menu />
          <div className={Styles.header_text}> HU PROJECT TRACK</div>
        </Header>
      </div>


      {/* Side Navbar */}
      <div className={Styles.side_text}>
        <h1 style={{ fontSize: 49, margin: 0 }}>HU</h1>
        <h3 style={{ margin: 0 }}>PROJECT TRACKER</h3>
      </div>
      <div className={Styles.side_img} >
        <Image src={`/undrawSE.png`} alt="Undraw Software Engineer" width={380} height={277}
        />
      </div>
     
      {/* Content */}
      <Content className={Styles.content}>



        {/* Form  */}

        <div >
          <Form form={form} className={Styles.form_login}
            layout="vertical"
            name="normal_login"
            initialValues={{ remember: true }}

          >
            {/* The color of the text need to be changed to white */}
            <Form.Item className={Styles.form_text_box}
              label="User Name"
              name="username"
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Input />
              <hr />
            </Form.Item>
            {/* The color of the text need to be changed to white */}
            <Form.Item className={Styles.form_text_box}
              label="Password"
              name="password"
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Input.Password onChange={e => setPassword(e.target.value)} />
              <hr />
            </Form.Item>
            <Form.Item className={Styles.form_text_box}
              label="New Password"
              name="newpassword"
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Input.Password />
              <hr />
            </Form.Item>
            <Form.Item className={Styles.form_text_box}
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true, message: 'This field is mandatory' }]}

            
            >
              <Input.Password />
              <hr />
            </Form.Item>
            <div className={Styles.btns}>
              <Form.Item >
                <Button htmlType="reset" className={Styles.reset} >
                  Reset
                </Button>
              </Form.Item>
              <Form.Item >
                <Button htmlType="submit" type="primary" className={Styles.confirm} onClick={checkPassword}>
                  Confirm
                </Button>
                {
                  errorMsg && ( <Alert className={Styles.alert} message={errorMsg} type="warning" showIcon closable />
                  )
                }{
                  pwdConf &&(<Result className={Styles.popupconfir}
                    status="success"
                    title="Your Password has been changed successfully"
                    extra={[ <Link href='/login/' >
                      <Button key="confirm">OK</Button></Link>
                    ]}
                  />)

                }
              </Form.Item>
            </div>
            <Form.Item>
            <Link href='/login/' >
               <p className={Styles.forget}>Click here to Login  </p> 
              </Link>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default ResetPassword;