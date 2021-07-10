import Cookies from "js-cookie";
import { useState } from "react";
import { ApiLogin } from "../api";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, message } from "antd";

const Login = () => {
  const Router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    ApiLogin({ phone, password }, (data, error) => {
      setLoading(false);
      if (error) return message.error("Invalid credentials");
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      Router.push("/");
    });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="stripe">
          <h1>FikraSpace</h1>
        </div>
        <div className="right-side">
          <form onSubmit={handleLogin}>
            <p className="label">Phone Number</p>
            <input
              required
              placeholder="00000000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
            />
            <p className="label">Password</p>
            <input
              required
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            {/* <button type="submit">Login</button> */}
            <Button
              size="large"
              className="submit-btn"
              htmlType="submit"
              type="primary"
              loading={loading}
              disabled={loading}
            >
              Login
            </Button>
            <Link href="forgotPassword">
              <p className="forgot-link">Forgot Password?</p>
            </Link>
            <div className="links-container">
              <p>Don't have an account?</p>
              <Link href="/register">
                <p className="sign-up-link">Sign Up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
