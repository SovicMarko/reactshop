import cartCountReducer from './cartCounter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    cartCount: cartCountReducer,
    isLogged: isLoggedReducer
});



export default rootReducer;