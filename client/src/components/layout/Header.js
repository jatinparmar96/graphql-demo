import { Layout, Menu } from "antd";
import { useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const menuItems = [{ label: "Home", key: "home" }];
  const onMenuClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout.Header>
      <Menu
        selectedKeys={[current]}
        onClick={onMenuClick}
        mode="horizontal"
        theme="dark"
        items={menuItems}
      />
    </Layout.Header>
  );
};

export default Header;
