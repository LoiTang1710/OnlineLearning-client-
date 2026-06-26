import React, { useState } from "react";
import { useRegister } from "../hooks/useAuth.ts";

const RegisterForm = () => {
  
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  const { mutate: RegisterMutate, isPending } = useRegister();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword){
        alert('Mật khẩu xác nhận không khớp!')
        return
    }
    RegisterMutate({email,password,full_name: fullname,username})
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Đăng ký</h3>
        <input type="text" placeholder="Họ và tên" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
        <input type="text"  placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <div>
          <input type="checkbox" name="accpet" id="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            praesentium id nobis soluta quasi labore qui doloribus
            necessitatibus, dolor suscipit aut odit laborum voluptatibus
            voluptates asperiores voluptate ducimus nam cum!
          </p>
        </div>
        <button type="submit">{isPending ? 'Đang chuyển trang...' : 'Đăng ký'}</button>
      </form>
    </div>
  );
};

export default RegisterForm;
