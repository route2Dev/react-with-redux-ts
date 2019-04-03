import { IAuthor } from '.';
import { LOAD_AUTHORS_SUCCESS } from './author-actions';

interface LoadAuthorAction {
    type: 'LOAD_AUTHORS_SUCCESS';
    authors: Array<IAuthor>;
}

type KnownAction = LoadAuthorAction;

// type Reducer<Array<IAuthor>, KnownAction>
export const reducer = (state: Array<IAuthor> = [], action: KnownAction) => {
    switch (action.type) {       
        case LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            break;
    }

    return state;
}