import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      Homepage,
      <Link to="/login">Đăng nhập</Link>
      <Link to="/register">Đăng ký</Link>
    </div>
  );
}

export default HomePage
