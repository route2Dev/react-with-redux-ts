import { ICourse } from '.';
import * as courseApi from '../api/courseApi';
import { apiCallError, beginApiCall } from './api-status-actions';

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

// Optimistic Actions
export const DELETE_COURSES_OPTIMISTIC = 'DELETE_COURSES_OPTIMISTIC';

export const loadCoursesSuccess = (courses: ICourse[]) => ({
  type: LOAD_COURSES_SUCCESS,
  courses
});

export const createCoursesSucess = (course: ICourse) => ({
  type: CREATE_COURSE_SUCCESS,
  course
});

export const updateCoursesSucess = (course: ICourse) => ({
  type: UPDATE_COURSE_SUCCESS,
  course
});

export const deleteCourseOptimistic = (course: ICourse) => ({
  type: DELETE_COURSES_OPTIMISTIC,
  course
});

// Thunks

export const loadCourses = () => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const saveCourse = (course: ICourse) => {
  return (dispatch: any) => {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCoursesSucess(savedCourse))
          : dispatch(createCoursesSucess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const deleteCourse = (course: ICourse) => {
  return (dispatch: any) => {
    dispatch(deleteCourseOptimistic(course));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return courseApi.deleteCourse(course.id!);
  };
};
