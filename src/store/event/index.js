import * as func from '../function'
import actions from './action'
import getters from './getters'
import mutations from './mutations'

const state = func.local.get() || {
	count: 0,
	event: []
}

export default { 
	state,
	actions,
	getters,
	mutations
}