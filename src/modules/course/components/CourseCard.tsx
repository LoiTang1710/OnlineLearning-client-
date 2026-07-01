import { useCourse } from "../hooks/useCourse.ts";
import type { CourseResponse } from "../types/course.type.ts";

const CourseCard = () => {
  const { data, isPending } = useCourse();
  console.log({ data, isPending });

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {isPending ? (
        <div>Đang tải khoá học</div>
      ) : (
        data.courses.map((course: CourseResponse) => (
          <div
            className="bg-white text-black rounded-lg overflow-hidden border border-neutral/30"
            key={course.id}
          >
            <div className="relative h-48 w-full bg-slate-100">
              <img
                // Thay bằng field ảnh thực tế từ API (vd: course.thumbnail), ở đây dùng placehold làm fallback
                src={
                  "https://placehold.co/600x400/2d4b63/FFF?text=Course+Image"
                }
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-[#1e5bbf] text-white text-[11px] font-bold px-2.5 py-1 rounded md uppercase tracking-wide">
                "IT & SOFTWARE"
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
        ))
      )}
    </div>
  );
};

export default CourseCard;
