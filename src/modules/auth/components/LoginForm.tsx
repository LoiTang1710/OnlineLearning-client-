import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useAuth.ts";
import type React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
  const { mutate: LoginMutate, isPending } = useLogin();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginMutate({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Đăng nhập</h1>
      <div>
        <input type="email" placeholder="Địa chỉ Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div>
          <input type="text" placeholder="Nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div>
            <Link to={"/"}>Quên mật khẩu?</Link>
          </div>
        </div>
        <button type="submit" disabled={isPending}>{isPending ? 'Đang xử lý': 'Đăng nhập'}</button>
      </div>
    </form>
  );
};

export default LoginForm;
