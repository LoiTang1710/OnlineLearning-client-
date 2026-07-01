import { useQuery } from "@tanstack/react-query";
import { CourseApi } from "../services/course.api.ts";

export const useCourse = () => {
  return useQuery({
    queryKey: ["course"],
    queryFn: () => CourseApi.getAll(),
  });
};
