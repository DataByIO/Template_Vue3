import { createStore } from 'vuex'

/*************************************************************
 /* SYSTEM NAME      : scripts
 /* PROGRAM NAME     : store.js
 /* DESCRIPTION      : Vuex는 Vue.js에서 사용하는 상태 관리 라이브러리, 모든 데이터 통신을 한 곳에서 중앙 집중식으로 관리하는 패턴
                       https://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/
 /* MODIFIVATION LOG :
 /* DATA         AUTHOR          DESC.
 /*--------     ---------    ----------------------
 /*2025.03.21   KIMDONGMIN   INTIAL RELEASE
 /*2025.03.21   KIMDONGMIN   Vue Vuex(store) Add
 /*************************************************************/

// Create a new store instance.
const store = createStore({
    state () {
        return {
            account: {
                id: 0
            }
        }
    },
    //commit('함수명, ‘전달인자’)` 방식으로 호출
    //State 변경을 담당한다. 반드시 Mutation을 통해서만 State를 변경해야 한다
    mutations: {
            setAccount(state, payload){
                state.account.id = payload;
            }
    }
})

export default store;