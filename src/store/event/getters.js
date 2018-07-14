export default {
	//getters更新后的state到view
	getEventList(states) {
		return states.event
	},
	getToDo(states) {
		return states.event.filter((item) => {
			if(item.type === 1){
				return item
			}
		})
	},
	getDone(states) {
		return states.event.filter((item) => {
			if(item.type === 2){
				return item
			}
		})
	},
	getCancel(states) {
		return states.event.filter((item) => {
			if(item.type === 3){
				return item
			}
		})
	}
}