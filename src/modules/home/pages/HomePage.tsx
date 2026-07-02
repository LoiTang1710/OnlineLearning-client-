import TextType from "@/components/animation/TextType.tsx";
import { CourseCard } from "../../course/index.tsx";



const HomePage = () => {
  return (
    <div>
      <div className="h-124 w-full bg-white relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Your Content/Components */}
        <div className="absolute w-full z-10 p-10 flex">
          <div className="flex flex-col gap-3">
            <div className="rounded-full px-2 py-1 w-fit bg-primary/10 border border-primary text-sm text-primary">
              Học tập & rèn luyện
            </div>
            <h1 className="text-7xl font-bold w-full leading-tight tracking-tighter">
              Chinh phục học <br/> tập,{" "}
              <TextType
                text={"làm chủ lập trình"}
                typingSpeed={125}
                cursorCharacter="_"
                className="text-blue-600 block whitespace-nowrap mt-2"
              />
            </h1>
            <p className="line-clamp-5 max-w-lg text-neutral leading-snug tracking-tighter text-lg [word-spacing: 0.2em]">
              Đồng hành cùng sinh viên trên hành trình từ những dòng code đầu
              tiên đến các dự án thực tế, giúp việc học trở nên dễ hiểu, hiệu
              quả và đầy cảm hứng.
            </p>
          </div>
          {/* Chèn model gif ở đây */}
          {/* <div className="w-1/2 flex items-center justify-center relative group"></div> */}
        </div>
      </div>
      <div className="pt-10">
        <div className="px-8">
          <h2 className="leading-tight tracking-tighter text-4xl font-bold">
            Khoá học nổi bật
          </h2>
          <p className="text-neutral">Môn học nổi bật nhiều sinh viên rớt</p>
        </div>
        <CourseCard />
      </div>
    </div>
  );
};

export default HomePage;
