import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../reducers/userSlice";
import { getFiles } from "../../actions/file";
import "./Disk.scss";

import { CloudServerOutlined } from "@ant-design/icons";
import { FolderAddOutlined } from "@ant-design/icons";
import { Button, Descriptions, PageHeader } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Layout } from "antd";
import { Input } from "antd";
import UploadBtn from "../UploadBtn";
const { Search } = Input;
const { Header, Content, Sider } = Layout;

function Disk() {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const isAuth = useSelector(selectIsAuth);
  const onSearch = (value) => console.log(value);
  return (
    // <section className="disk">
    //   <Button type="primary">IM a button</Button>
    // </section>
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
        width={250}
        className="border-r-1"
      >
        <div className="login-logo df aic jcc">
          <CloudServerOutlined style={{ marginRight: 10 }} />
          <span>Cloud Disk</span>
        </div>
        <UploadBtn />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 250 }}>
        <Header
          className="site-layout-background df aic jcsb"
          style={{ padding: "0 20px" }}
        >
          <Search
            className=""
            placeholder="Search by name"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          {isAuth && (
            <div>
              <Avatar icon={<UserOutlined />} />
              <span
                style={{ cursor: "pointer", marginLeft: 10 }}
                onClick={() => dispatch(logout())}
              >
                Log out
              </span>
            </div>
          )}
        </Header>
        {/* <Breadcrumb
          style={{
            margin: "20px",
          }}
        >
          <Breadcrumb.Item>user</Breadcrumb.Item>
          <Breadcrumb.Item>disk</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Title"
            extra={[
              <Button key="3">Operation</Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
            ]}
          >
            <Button type="primary" icon={<FolderAddOutlined />}>
              New folder
            </Button>
          </PageHeader>
        </div>
        <Content
          className="site-layout-background full"
          style={{
            margin: "0 20px 20px",
            padding: 24,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default Disk;
