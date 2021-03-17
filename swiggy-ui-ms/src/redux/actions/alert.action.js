import { AlertConstants } from '../constants';

export const AlertActions = {
    success, 
    error,
    clear,
}

function error(message) {
    return {
        type: AlertConstants.ERROR, message
    }
}
function clear(message) {
    return {
        type: AlertConstants.CLEAR
    }
}
function success(message) {
    return {
        type: AlertConstants.SUCCESS, message
    }
}
