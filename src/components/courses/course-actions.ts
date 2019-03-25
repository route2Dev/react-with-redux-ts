import { ICourse } from './course';

export function createCourse(course: ICourse) {
    return { type: 'CREATTE_COURSE', course};
}
