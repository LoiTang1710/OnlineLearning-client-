import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "../components/CourseCard.tsx";
import  { useState } from "react";

const filterButtons = [
  {
    filter: "all",
    display: "Tất cả",
  },
  {
    filter: "firstYear",
    display: "Năm 1",
  },
  {
    filter: "secondYear",
    display: "Năm 2",
  },
  {
    filter: "thirdYear",
    display: "Năm 3",
  },
  {
    filter: "finalYear",
    display: "Năm 4",
  },
];

const CoursePage = () => {
  const [active, setActive] = useState<string>("all");
  const [totalCourse, setTotalCourse] = useState<number>(0)
  const handleClick = (filter: string) => {
    setActive(filter);
  };
  return (
    <div>
      <div className="mx-8 mt-10 bg-white border border-gray-200 rounded-3xl shadow-sm">
        {/* Header Section */}
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
              <SlidersHorizontal size={20} />
            </div>
            <span className="font-bold text-gray-800 text-lg">Bộ lọc</span>
          </div>
          <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            {totalCourse} khóa học
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" />

        {/* Content Section */}
        <div className="p-8">
          {/* Search Input */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center bg-transparent pointer-events-none text-neutral/50">
              <Search size={16} />
            </div>
            <input
              className="w-full pl-10 pr-4 py-2 border border-neutral/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-neutral/50 placeholder-gray-400"
              type="text"
              name="filter"
              placeholder="Tìm khóa học..."
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3">
            {filterButtons.map((button) => {
                const isActive = button.filter === active
              return (
                <button
                  key={button.filter}
                  value={button.filter}
                  onClick={() => {
                    handleClick(button.filter);
                  }}
                  className={`px-4 py-1 ${isActive ? "bg-primary text-white" : "bg-neutral/10 text-neutral"} text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 ease-in`}
                >
                  {button.display}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Course Cards Area */}
      <div className="mt-8">
        <CourseCard active={active} setTotalCourse={setTotalCourse}/>
      </div>
    </div>
  );
};

export default CoursePage;
