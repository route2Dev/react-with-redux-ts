import { API_CALL_ERROR, BEGIN_API_CALL } from './api-status-actions';
import initialState from './initial-state';

interface BeginApiCallAction {
    type: 'BEGIN_API_CALL';    
}

type KnownAction = BeginApiCallAction;

const actionTypeEndsInSuccess = (type: string) => {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export const apiCallsInProgress = (state = initialState.apiCallsInProgress, action: KnownAction) => {
    if (action.type === BEGIN_API_CALL) {
        return state + 1;            
    } else if (
        action.type === API_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}