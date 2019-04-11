import { IAuthor } from '.';
import * as authorApi from '../api/authorApi';
import { apiCallError, beginApiCall } from './api-status-actions';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

export const loadAuthorsSuccess = (authors: Array<IAuthor>) => ({
    type: LOAD_AUTHORS_SUCCESS, authors
});

export const loadAuthors = () => {
    return (dispatch: any) => {
        dispatch(beginApiCall())
        return  authorApi.getAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
};