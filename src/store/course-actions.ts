import { ICourse } from '.';
import * as courseApi from '../api/courseApi';

export const CREATE_COURSE = 'CREATE_COURSE';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

const createCourse = (course: ICourse) => ({ type: CREATE_COURSE, course });

const loadCoursesSuccess = (courses: Array<ICourse>) => ({
    type: LOAD_COURSES_SUCCESS, courses
});

const loadCourses = () => {
    return (dispatch: any) => {
     return  courseApi.getCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const actions = {
    createCourse,
    loadCourses
};
