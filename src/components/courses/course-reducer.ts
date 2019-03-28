import { ICourse } from '../../store/course';

export default function courseReducer(state = new Array<ICourse>(), action: any) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, {...action.course}];
        default:
            return state;
    }
}
