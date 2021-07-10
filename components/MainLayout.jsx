import { PageHeader, Popover, Avatar, Button } from "antd";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
const MainLayout = ({ children, title, subTitle, hasBack }) => {
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
      {hasBack ? (
        <PageHeader
          className="site-page-header"
          title={title}
          subTitle={subTitle}
          onBack={() => Router.back()}
          extra={[
            <Popover trigger="click" placement="bottom" content={content}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Popover>,
          ]}
        />
      ) : (
        <PageHeader
          className="site-page-header"
          title={title}
          subTitle={subTitle}
          extra={[
            <Popover trigger="click" placement="bottom" content={content}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Popover>,
          ]}
        />
      )}

      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;
