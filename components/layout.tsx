import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import styles from "../styles/BaseLayout.module.css";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Projects', '2', <DesktopOutlined />),
  getItem('Backlogs', '3', <FileOutlined />)
];

type Props = {
  children: React.ReactNode
}

const BaseLayout: React.FC<Props> = (props:Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [currentPage, setCurrentPage] = useState("");
  const [currentPageBase, setCurrentPageBase] = useState("");
  useEffect(() => {
    setCurrentPage(window.location.href);
    setCurrentPageBase(window.location.origin);
  }, []);
  const breadcrumbsFromUrl = currentPage.split("/").splice(3);
  // create the breacrumb ahref
  const sliceBreadCrumbAHref: (string | undefined)[] = [];
  for (var i = 0; i < 1; i++) {
    for (var j = i+1; j < breadcrumbsFromUrl.length + 1; j++) {
      sliceBreadCrumbAHref.push(currentPageBase + "/" + breadcrumbsFromUrl.slice(i, j).join("/"));
    }
  }
  // console.log("sliceBreadCrumbAHref", sliceBreadCrumbAHref);
  const breadcrumbs = breadcrumbsFromUrl.map((bc, idx) => <Breadcrumb.Item><a href={sliceBreadCrumbAHref[idx]}>{bc}</a></Breadcrumb.Item>);
  return (
  <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(info) => alert("clicked", info)}/> */}
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1"><a href="dashboard"><PieChartOutlined />   Dashboard</a></Menu.Item>
          <Menu.Item key="2"><a href="projects"><DesktopOutlined />   Projects</a></Menu.Item>
          <Menu.Item key="3"><a href="backlogs"><FileOutlined />   Backlogs</a></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <div className={styles.header}>HU Project Tracker</div>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbs}
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2023 Created by Linkers</Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;