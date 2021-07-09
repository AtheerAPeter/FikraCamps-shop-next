import Cookies from "js-cookie";
import { useRouter } from "next/router";
import RouteProtect from "../HOC/RouteProtect";
import { PageHeader, Avatar, Popover, Button } from "antd";

import { UserOutlined } from "@ant-design/icons";
const Home = () => {
  const Router = useRouter();
  const handleLogout = async () => {
    await Cookies.remove("token");
    await Cookies.remove("user");
    Router.push("/login");
  };

  const content = (
    <div>
      <Button onClick={handleLogout} type="primary" danger>
        Logout
      </Button>
    </div>
  );

  return (
    <>
      <RouteProtect>
        <PageHeader
          className="site-page-header"
          title="Home"
          extra={[
            <Popover trigger="click" placement="bottom" content={content}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Popover>,
          ]}
        />
      </RouteProtect>
    </>
  );
};

export default Home;
