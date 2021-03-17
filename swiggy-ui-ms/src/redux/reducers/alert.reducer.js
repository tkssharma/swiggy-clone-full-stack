import { AlertConstants } from '../constants';

export function alert(state= {}, action) {
    switch(action.type){
        case AlertConstants.SUCCESS:
         return {
             type: 'success',
             message: action.message 
         }
         case AlertConstants.ERROR:
         return {
             type: 'error',
             message: action.message 
         }
         case AlertConstants.CLEAR:
         return {};
         default:
             return state;
    }
}