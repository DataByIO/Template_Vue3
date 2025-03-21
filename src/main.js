import {createApp} from 'vue'
import store from "@/scripts/store";
import router from "@/scripts/router";
import App from './App.vue'

/*************************************************************
 /* SYSTEM NAME      : src
 /* PROGRAM NAME     : main.js
 /* DESCRIPTION      : main.js는 Vue3.js 애플리케이션의 진입점( entry point ) 역할을 하는 파일
 https://j-bbang.tistory.com/22
 /* MODIFIVATION LOG :
 /* DATA         AUTHOR          DESC.
 /*--------     ---------    ----------------------
 /*2025.03.21   KIMDONGMIN   INTIAL RELEASE
 /*2025.03.21   KIMDONGMIN   Vue Router: 공식 라이브러리, 페이지 간 이동을 위해 추가
 /*2025.03.21   KIMDONGMIN   Vue vuex: Vuex는 Vue.js에서 사용하는 상태 관리 라이브러리, 모든 데이터 통신을 한 곳에서 중앙 집중식으로 관리하는 패턴
 /*************************************************************/


createApp(App).use(store).use(router).mount('#app')
