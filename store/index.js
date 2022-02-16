import Vuex from 'vuex'

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedMemos: [],
    },
    mutations: {
      setMemos(state, memos){
        state.loadedMemos = memos
      },
      addMemo(state, memo){
        state.loadedMemos.push(memo);
      }
    },
    actions: {
      fetchMemos({ commit }) {
        return this.$axios
        .$get(`${url}/memos`)
        .then(data => {
          commit("setMemos",data);
        })
        .catch(e => console.log(e));
      },
      addMemo({ commit }, content) {
       return this.$axios
       .post(`${url}/memos`, { memo: { content: content }})
       .then(res => {
         commit("addMemo", res.data);
       }) 
      }
    },
    getters: {
      loadedMemos(state){
        return state.loadedMemos;
      }
    }
  })
};

export default createStore;
