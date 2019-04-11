import { combineReducers } from 'redux';
import { apiCallsInProgress } from './api-status-reducer';
import { reducer as authors } from './author-reducer';
// renaming import so name matches Application state property.
import { reducer as courses } from './course-reducer';

const rootReducer = combineReducers({
    courses,
    authors,
    apiCallsInProgress    
});

export default rootReducer;
