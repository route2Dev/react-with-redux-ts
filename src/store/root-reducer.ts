import { combineReducers } from 'redux';
import { reducer as authors } from './author-reducer';
// renaming import so name matches Application state property.
import { reducer as courses } from './course-reducer';

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;
