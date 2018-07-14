//异步分发提交载荷至mutations
export default {
	addevent: ({commit},parma) => commit('ADDEVENT',{items: parma}),
	eventdone: ({commit},parma) => commit('EVENTDONE',{id: parma}),
	eventtodo: ({commit},parma) => commit('EVENTTODO',{id: parma}),
	eventcancel: ({commit},parma) => commit('EVENTCANCEL',{id: parma}),
	clearevent: ({commit},parma) => commit('CLEAREVENT'),
	uploadevent: ({commit},parma) => commit('UPLOADEVENT',parma),
	editevent: ({commit},parma) => commit('EDITEVENT',parma),
	delevent: ({commit},parma) => commit('DELEVENT',parma)
}