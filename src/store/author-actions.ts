import { IAuthor } from '.';
import * as authorApi from '../api/authorApi';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

const loadAuthorsSuccess = (authors: Array<IAuthor>) => ({
    type: LOAD_AUTHORS_SUCCESS, authors
});

const loadAuthors = () => {
    return (dispatch: any) => {
     return  authorApi.getAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const actions = {
    loadAuthors
};