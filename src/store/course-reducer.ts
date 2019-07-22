import {
  CREATE_COURSE_SUCCESS,
  DELETE_COURSES_OPTIMISTIC,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from './course-actions';
import { ICourse } from './index';

interface CreateCourseAction {
  type: 'CREATE_COURSE_SUCCESS';
  course: ICourse;
}

interface UpdateCourseAction {
  type: 'UPDATE_COURSE_SUCCESS';
  course: ICourse;
}

interface LoadCourseAction {
  type: 'LOAD_COURSES_SUCCESS';
  courses: ICourse[];
}

interface DeleteCourseAction {
  type: 'DELETE_COURSES_OPTIMISTIC';
  course: ICourse;
}

type KnownAction =
  | CreateCourseAction
  | UpdateCourseAction
  | LoadCourseAction
  | DeleteCourseAction;

// type Reducer<Array<ICourse>, KnownAction>
export const reducer = (state: ICourse[] = [], action: KnownAction) => {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case DELETE_COURSES_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
};
