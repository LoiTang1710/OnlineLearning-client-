import RegisterForm from '../components/RegisterForm.tsx'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center sm:p-10">
      <div className="flex w-full max-w-[97%] 4xl:max-w-400 min-h-175 bg-primary/30 rounded-4xl overflow-hidden">
        <div className="bg-white p-16 flex flex-col justify-center items-center w-1/2">
          <div className="text-center font-bold text-2xl text-primary">
            QLCamp
          </div>
          <div className="text-center mt-8">
            <p className="font-bold text-7xl text-tertiary">
              Bắt đầu hành trình của bạn
            </p>
            <p className="mt-5 text-neutral/70">
              Tham gia cộng đồng QLCamp để học hỏi và chia sẻ kiến thức
            </p>
          </div>
          <div className="w-full max-w-100 mt-8 rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80" // Thay bằng ảnh thực tế của bạn
              alt="ExpertShare Dashboard preview"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register
