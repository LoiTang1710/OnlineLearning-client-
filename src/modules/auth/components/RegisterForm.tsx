import React, { useState } from "react";
import { useRegister } from "../hooks/useAuth.ts";
import { Button } from "../../../components/Button.tsx";
import { Link } from "react-router-dom";

interface InputConfig {
  name: "fullname" | "username" | "email" | "password" | "confirmPassword";
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
}

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { mutate: RegisterMutate, isPending } = useRegister();
  const inputFields: InputConfig[] = [
    { name: "fullname", type: "text", placeholder: "Họ và tên" },
    { name: "username", type: "text", placeholder: "Tên đăng nhập" },
    { name: "email", type: "email", placeholder: "Email" },
    {
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      autoComplete: "new-password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Xác nhận mật khẩu",
    },
  ];

  const stateMapping = {
    fullname: { value: fullname, setter: setFullname },
    username: { value: username, setter: setUsername },
    email: { value: email, setter: setEmail },
    password: { value: password, setter: setPassword },
    confirmPassword: { value: confirmPassword, setter: setConfirmPassword },
  };
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp" );
      return;
    }
    RegisterMutate({ email, password, full_name: fullname, username });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white  p-5 w-md rounded-xl shadow"
      >
        <h1 className="text-center text-2xl font-bold text-tertiary mb-7">
          Đăng ký
        </h1>
        <div className="flex flex-col gap-5">
          {errorMessage && (
            <div className="w-full p-3 rounded-xl bg-red-500/20 border border-red-500 text-red-500">
              {errorMessage}
            </div>
          )}
          {inputFields.map((field) => {
            const currentState = stateMapping[field.name];

            return (
              <>
                <input
                  key={field.name} // Khóa key định danh bắt buộc phải có trong vòng lặp React
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={currentState.value}
                  autoComplete={field.autoComplete}
                  onChange={(e) => {
                    currentState.setter(e.target.value); // Gọi chính xác hàm set tương ứng
                    setErrorMessage(null); // Ẩn thông báo lỗi khi người dùng bắt đầu sửa lại
                  }}
                  className="bg-secondary/40 p-3 w-full rounded-xl border border-primary/30 text-neutral"
                />
                {!currentState.value && <div>{field.placeholder} là bắt buộc</div>}
              </>
            );
          })}
          <div className="flex justify-items-start gap-3">
            <input type="checkbox" name="accpet" id="" />
            <p className="text-sm text-neutral">
              Bằng việc tiếp tục, bạn đồng ý với các điều khoản và chính sách
              bảo mật của QLCamp
            </p>
          </div>
          <Button type="submit">
            {isPending ? "Đang chuyển trang..." : "Đăng ký"}
          </Button>
          <div className="flex gap-1 text-sm justify-center">
            <p>Đã có tài khoản?</p>
            <Link to={"/login"} className="text-tertiary font-bold underline">
              Đăng nhập
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
