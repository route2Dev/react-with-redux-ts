export const BEGIN_API_CALL = 'BEGIN_API_CALL';
export const API_CALL_ERROR = 'API_CALL_ERROR';

export const beginApiCall = () => {
    return { type: BEGIN_API_CALL };
};

export const apiCallError = (error: any) => {
    return { type: API_CALL_ERROR };
}
