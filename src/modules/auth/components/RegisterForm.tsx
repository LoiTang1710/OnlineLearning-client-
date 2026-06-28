import React, { useState } from "react";
import { useRegister } from "../hooks/useAuth.ts";
import { Button } from "../../../components/Button.tsx";
import { Link } from "react-router-dom";
import { z } from "zod";

const invalidCharsRegex = /[ .?!]/;

const registerSchema = z
  .object({
    fullname: z.string().min(1, "Họ và tên là bắt buộc"),
    username: z
      .string()
      .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
      .max(50, "Tên đăng nhập không được vượt quá 50 ký tự")
      .refine(
        (s) => !invalidCharsRegex.test(s),
        "Tên đăng nhập không chứa khoảng trắng,.,!,?",
      ),
    email: z
      .string()
      .min(1, "Email là bắt buộc")
      .email("Định dạng Email không hợp lệ"),
    password: z
      .string()
      .min(1, "Mật khẩu là bắt buộc")
      .regex(
        new RegExp("^[a-zA-Z0-9]{8,30}$"),
        "Mật khẩu phải từ 8-30 ký tự, chỉ chứa chữ cái và chữ số",
      ),
    confirmPassword: z.string().min(1, "Vui lòng xác nhận lại mật khẩu"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không trùng khớp",
    path: ["confirmPassword"],
  });

type RegisterFormValue = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<
    Partial<Record<keyof RegisterFormValue, string>>
  >({});

  const getFormData = (): RegisterFormValue => ({
    fullname,
    username,
    email,
    password,
    confirmPassword,
  });

  const { mutate: RegisterMutate, isPending } = useRegister();
  const inputFields = [
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
  ] as const;

  const stateMapping = {
    fullname: { value: fullname, setter: setFullname },
    username: { value: username, setter: setUsername },
    email: { value: email, setter: setEmail },
    password: { value: password, setter: setPassword },
    confirmPassword: { value: confirmPassword, setter: setConfirmPassword },
  };
  const handleBlur = (name: keyof RegisterFormValue) => {
    const formData = registerSchema.safeParse(getFormData());
    if (!formData.success) {
      const errorField = formData.error.issues.find(
        (issue) => issue.path[0] === name,
      );
      setFieldError((prev) => ({
        ...prev,
        [name]: errorField ? errorField.message : undefined,
      }));
    } else {
      setFieldError((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = registerSchema.safeParse(getFormData());

    if (!formData.success) {
      const errors: Partial<Record<keyof RegisterFormValue, string>> = {};
      formData.error.issues.forEach((issue) => {
        const fieldname = issue.path[0] as keyof RegisterFormValue;
        if (!errors[fieldname]) errors[fieldname] = issue.message;
      });
      setFieldError(errors);
      return;
    }
    setFieldError({});
    RegisterMutate(
      {
        full_name: fullname,
        username,
        email,
        password,
      },
      {
        onError: (error) => {
          setErrorMessage(error.response?.data.message || error.message);
        },
      },
    );
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
            const error = fieldError[field.name];
            console.log(field.name);
            return (
              <>
                <input
                  key={field.name} // Khóa key định danh bắt buộc phải có trong vòng lặp React
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={currentState.value}
                  onBlur={() => handleBlur(field.name)}
                  onChange={(e) => {
                    currentState.setter(e.target.value); // Gọi chính xác hàm set tương ứng
                    setErrorMessage(null); // Ẩn thông báo lỗi khi người dùng bắt đầu sửa lại
                  }}
                  className="bg-secondary/40 p-3 w-full rounded-xl border border-primary/30 text-neutral"
                />
                {error && (
                  <span className="text-red-500 -mt-4 -mb-2 ml-1 text-xs">
                    *{error}
                  </span>
                )}
              </>
            );
          })}
          <div className="flex justify-items-start gap-3">
            <input type="checkbox" name="accept" />
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
