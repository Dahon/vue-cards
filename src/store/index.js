import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        data: {
            list1: [
                {
                    name: 'Card 1',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque nec urna quis condimentu'
                },
                
            ],
            list2: [
                {
                    name: 'Card 2',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque nec urna quis condimentu'
                },
            ],
            list3: [],
            list4: []
        }
    },
    mutations: {
        
		setList (state, data) {
			state.data = data
		},
		setListGroup (state, { value, key }) {
            state.data[key] = value
        },
        setListData(state, {name, desc, key}) {
            state.data[key].push({name, desc})
        }
	},
	actions: {
		storeList (context) {
			let jsonPages = JSON.parse(JSON.stringify(context.state.data))
			console.log(jsonPages)
		}
    },
    plugins: [createPersistedState()]
});
    