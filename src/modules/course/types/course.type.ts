export interface CourseResponse  {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    year: string
}
export interface CoursePayload {
    title: string,
    description: string,
}
export interface CourseCardProps {
    active: string,
    setTotalCourse?: (count: number) => void
}