import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from './course-actions';
import { ICourse } from './index';

interface CreateCourseAction {
    type: 'CREATE_COURSE';
    course: ICourse;
}

interface LoadCourseAction {
    type: 'LOAD_COURSES_SUCCESS';
    courses: Array<ICourse>;
}

type KnownAction = CreateCourseAction | LoadCourseAction;

// type Reducer<Array<ICourse>, KnownAction>
export const reducer = (state: Array<ICourse> = [], action: KnownAction) => {
    switch (action.type) {
        case CREATE_COURSE:
            return [...state, { ...action.course }];
        case LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            break;
    }

    return state;
}
