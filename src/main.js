import { createApp } from 'vue';
import store from "@/scripts/store";
import router from "@/scripts/router";
import App from './App.vue';
import axios from 'axios';


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

// 요청 인터셉터 설정 (모든 axios 요청에 대해 자동으로 토큰을 추가)
axios.interceptors.request.use(
    function(config) {
     const token = store.state.token; // store에서 token을 가져옵니다.
     if (token) {
      config.headers['access'] = token; // 모든 요청에 자동으로 토큰을 추가
     }
     return config;
    },
    function(error) {
     return Promise.reject(error);
    }
);

// 응답 인터셉터 설정 (응답 실패 시 처리)
axios.interceptors.response.use(
    function(response) {
     return response;
    },
    function(error) {
     if (error.response && error.response.status === 401) {
         // 401 에러 처리: AccessToken 만료
         // 1) Cookie 영역에 refreshToken이 있을 경
         //    ㄴ post /reissue 요청으로 토큰 발급 후 헤더 영역에 다시 세팅
         router.push({ path: "/loginpage" }); // 로그인 페이지로 리다이렉트
         // 2) 없을경우
         //    ㄴ login Page 호출
     }if (error.response && error.response.status === 400) {
         // 400 에러 처리: refreshToken 만료
         window.alert("[400 - refreshToken 만료] 로그인 정보가 유효하지 않습니다.");
         router.push({ path: "/loginpage" }); // 로그인 페이지로 리다이렉트
        }
     return Promise.reject(error);
    }
);

// 애플리케이션 시작
createApp(App)
    .use(store)  // Vuex store 사용
    .use(router) // Vue Router 사용
    .mount('#app'); // 애플리케이션 마운트