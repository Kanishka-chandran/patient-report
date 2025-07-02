// task 1



// import { createStore } from 'vuex';

// const store = createStore({
//   state() {
//     return {
//       user: {
//         name: 'Kanishka Chandran'
//       }
//     };
//   },
//   getters: {
//     userName(state) {
//       return state.user.name;
//     }
//   }
// });

// export default store;




// task 2



// import { createStore } from 'vuex';

// const store = createStore({
//   state() {
//     return {
//       groceryList: []
//     };
//   },
//   getters: {
//     groceries: (state) => state.groceryList
//   },
//   mutations: {
//     ADD_GROCERY(state, item) {
//       state.groceryList.push(item);
//     },
//     DELETE_GROCERY(state, index) {
//       state.groceryList.splice(index, 1);
//     }
//   },
//   actions: {
//     addGrocery({ commit }, item) {
//       commit('ADD_GROCERY', item);
//     },
//     deleteGrocery({ commit }, index) {
//       commit('DELETE_GROCERY', index);
//     }
//   }
// });

// export default store;


// task 3



import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'light',
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme(state, newTheme) {
      state.theme = newTheme;
    }
  },
  actions: {
    toggleTheme({ commit }) {
      commit('toggleTheme');
    },
    setTheme({ commit }, theme) {
      commit('setTheme', theme);
    }
  },
  getters: {
    currentTheme: (state) => state.theme,
  }
});




