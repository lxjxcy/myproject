
import {combineReducers} from 'redux'
import listReducers from './listReducers'
import sliderducers from './sliderReducers'
const reducers=combineReducers({
	listData:listReducers,
	sliderData:sliderducers
})
export default reducers;