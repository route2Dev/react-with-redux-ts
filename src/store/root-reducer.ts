import { combineReducers } from 'redux';
import courses from '../components/courses/course-reducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
