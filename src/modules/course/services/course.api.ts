import { AxiosApi } from "../../../utils/AxiosApi.ts"
import type { CoursePayload, CourseResponse } from "../types/course.type.ts"

export const CourseApi = {
    create: async(data: CoursePayload): Promise<CourseResponse> => {
        const response = await AxiosApi.post('/course', data)
        return response.data
    },
    getAll: async() => {
        const response = await AxiosApi.get('/course')
        return response.data
    },
    delete: async() => {

    }
}