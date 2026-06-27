import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useAuth.ts";
import type React from "react";
import { useState } from "react";
import { Button } from "../../../components/Button.tsx";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: LoginMutate, isPending } = useLogin();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    LoginMutate(
      { identifier, password },
      {
        onError: (error) => {
          setErrorMessage(error.response?.data.message || error.message);
        },
      },
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 w-md rounded-xl shadow"
    >
      <h1 className="text-center text-2xl font-bold text-tertiary mb-7">
        Đăng nhập
      </h1>
      <div className="flex flex-col gap-5">
        {errorMessage && (
          <div className="w-full p-3 rounded-xl bg-red-500/20 border border-red-500 text-red-500">
            {errorMessage}
          </div>
        )}
        <input
          type="text"
          placeholder="Email hoặc tên đăng nhập"
          value={identifier}
          onChange={(e) =>{
            setIdentifier(e.target.value);
            setErrorMessage(null);
          }}
          className="bg-secondary/40 p-3 w-full rounded-xl border border-primary/30 text-neutral"
        />
        <div className="flex gap-2 flex-col">
          <input
            type="text"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage(null);
            }}
            className="bg-secondary/70 p-3 w-full rounded-xl border border-primary/30 text-neutral"
          />
          <div className="flex justify-end text-[14px] mr-1 text-tertiary">
            <Link to={"/"}>Quên mật khẩu?</Link>
          </div>
        </div>
        <Button type="submit" disabled={isPending} variants="primary">
          {isPending ? "Đang xử lý" : "Đăng nhập"}
        </Button>
        <div className="flex gap-4 items-center">
          <div className="h-px flex-1 bg-primary" />
          <p className="text-tertiary text-xs whitespace-nowrap">
            Hoặc đăng nhập bằng
          </p>
          <div className="h-px flex-1 bg-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <Button variants="secondary">Google</Button>
          <Button variants="secondary">Facebook</Button>
        </div>
        <div className="flex gap-1 text-sm justify-center">
          <p>Chưa có tài khoản?</p>
          <Link to={"/register"} className="text-tertiary font-bold underline">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
