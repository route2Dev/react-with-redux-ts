import { ICourse } from '../../store/course';

export function createCourse(course: ICourse) {
    return { type: 'CREATTE_COURSE', course};
}
