const data = {
    namespaced: true,
    state: {
        width : 0, 
    },
    mutations: { 
        mutSetWidth (state, payload){
            state.width = payload
        }
    },
    actions: { 
        setWidth({commit}, payload){
            commit('mutSetWidth', payload)
        }
    }
}

export default data 

  