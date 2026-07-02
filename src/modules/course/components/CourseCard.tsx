import { BookOpen } from "lucide-react";
import { useCourse } from "../hooks/useCourse.ts";
import type { CourseCardProps, CourseResponse } from "../types/course.type.ts";
import type React from "react";
import { useEffect } from "react";

const CourseCard: React.FC<CourseCardProps> = ({ active, setTotalCourse }) => {
  const { data, isPending } = useCourse();
  console.log({ data, isPending });
  const coursesList = data?.courses || [];

  const filteredCourses = coursesList.filter((course: CourseResponse) => {
    switch (active) {
      case "firstYear":
        return course.year === "firstYear";
      case "secondYear":
        return course.year === "secondYear";
      case "thirdYear":
        return course.year === "thirdYear";
      case "finalYear":
        return course.year === "finalYear";
      default:
        return true;
    }
  });

  useEffect(() => {
    if (setTotalCourse) {
      setTotalCourse(filteredCourses.length);
    }
  }, [filteredCourses.length, setTotalCourse]);

  if (isPending) {
    return <div>Đang tải khoá học</div>;
  }

  if (filteredCourses.length === 0) {
    console.log(filteredCourses.length);
    return (
      <div className="mx-8 border border-gray-200 shadow-sm rounded-2xl p-10">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <BookOpen
            size={80}
            className="text-primary p-4 bg-secondary rounded-xl"
          />
          <div className="text-center">
            <p className="font-medium text-lg">
              Không tìm thấy khoá học phù hợp
            </p>
            <p className="text-neutral/70 text-sm">
              Thay đổi từ khoá hoặc bộ lọc để tìm khoá học phù hợp
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {filteredCourses.map((course: CourseResponse) => (
        <div
          className="bg-white text-black rounded-lg overflow-hidden border border-neutral/30"
          key={course.id}
        >
          <div className="relative h-48 w-full bg-slate-100">
            <img
              // Thay bằng field ảnh thực tế từ API (vd: course.thumbnail), ở đây dùng placehold làm fallback
              src={`${import.meta.env.VITE_MEDIA_URL}${course.imageUrl}`}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute w-18 text-center top-3 left-3 bg-mist-100 border border-neutral text-black text-[11px] font-bold px-2.5 py-1 rounded-full md tracking-tight">
              {
                {
                  firstYear: "Năm 1",
                  secondYear: "Năm 2",
                  thirdYear: "Năm 3",
                  finalYear: "Năm 4",
                }[course.year]
              }
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-2xl">{course.title}</h3>
            <p className="mt-4 text-neutral/80 h-15 line-clamp-3 font-light text-sm">
              {course.description}
            </p>
            <div className="mt-2 flex flex-col gap-2.5">
              {/* Tag 1: Lecturer */}
              <div className="flex items-center gap-1.5 bg-[#eaf8f1] text-[#208a54] border border-[#d2f0e0] px-3 py-1.5 rounded text-xs font-semibold w-fit">
                {/* <FileText className="w-3.5 h-3.5" strokeWidth={2.5} /> */}
                Lecturer Pattern Available
              </div>

              {/* Tag 2: Video */}
              <div className="flex items-center gap-1.5 bg-[#feefe4] text-[#c75510] border border-[#fde2ce] px-3 py-1.5 rounded text-xs font-semibold w-fit">
                {/* <Video className="w-3.5 h-3.5" strokeWidth={2.5} /> */}
                Video Walkthrough
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
