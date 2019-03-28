import { Reducer } from 'redux';
import { ICourse } from './course';

export const CREATE_COURSE = 'CREATE_COURSE';

export interface ICourse {
    title: string;
}

export interface ICourseState {
    course: ICourse
}

// const initialState: ICourse = 
// {
//     course: {
//       title: ''
//     }
// };

interface CreateCourseAction {
    type: 'CREATE_COURSE',
    course: ICourse
};
type KnownAction = CreateCourseAction;

export const actions = {
    createCourse: (course: ICourse) => ({type: CREATE_COURSE, course})
};

export const reducer: Reducer<Array<ICourse>, KnownAction> = (state: Array<ICourse> = [], action: KnownAction) => {
    // state = state || initialState;
    
    switch (action.type) {
        case CREATE_COURSE:
            return [...state, {...action.course}];                            
        default:
            break;
    }

    return state;
}
