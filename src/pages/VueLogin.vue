<template>
  <div class="login-container">
    <img src="https://www.11st.co.kr/static/images/common/logo_header_2023.png" alt="로고" class="logo">
    <form>
      <!-- ID 입력 필드 -->
      <div class="mb-3">
        <input type="email" class="form-control" id="id" placeholder="아이디를 입력하세요" v-model="state.from.username">
      </div>

      <!-- PW 입력 필드 -->
      <div class="mb-3">
        <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요" v-model="state.from.password">
      </div>

      <!-- 로그인 버튼 -->
      <button type="submit" class="btn btn-primary w-100" @click="submit()">로그인</button>
    </form>

    <!-- 소셜 로그인 버튼들 -->
    <div class="social-login-btn">
      <a href="#" class="kakao" title="카카오톡으로 로그인">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/KakaoTalk_Logo_2020.png" alt="카카오톡" width="24" height="24">
      </a>
      <a href="#" class="naver" title="네이버로 로그인">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Naver_logo_2019.svg" alt="네이버" width="24" height="24">
      </a>
      <a href="#" class="apple" title="애플로 로그인">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Apple_logo_black.svg" alt="애플" width="24" height="24">
      </a>
      <a href="#" class="google" title="구글로 로그인">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg" alt="구글" width="24" height="24">
      </a>
    </div>

    <!-- 추가 링크들 -->
    <div class="footer-links">
      <a href="#">아이디 찾기</a> ·
      <a href="#">비밀번호 찾기</a> ·
      <router-link to="/join">회원가입</router-link>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import router from "@/scripts/router";
import store from "@/scripts/store";

export default {
  setup() {
    const state = reactive({
      headers: {
        'Content-type': 'multipart/form-data',
      },
      from: {
        username: "",
        password: "",
        access: "",
      }
    })
    //Function: @click="submit()
    const submit = () => {//submit이라는 Function 선언
      //axios를 이용하여 프론트엔드 단 데이터를 /api/account/login로 보내는데 state.from항목들을 보낼거다.
      // 이때 state.from의 항목들은 Json(Key, Value) 형식으로 Controller에 넘어감

      axios.postForm("/login", state.from).then(() => {
        window.alert("로그인하였습니다.");
        test()
      }).catch(()=> {//로그인에 실패했을때 처리
      })
    }

    function test (){
      axios.post("/api/account/loginCheck").then((result) => {
        store.commit("setId", result.data.id);
        store.commit("setUsername", result.data.username);
        store.commit("setRole", result.data.role);
        router.push({path: "/"});
      }).catch(()=> {//로그인에 실패했을때 처리
        window.alert("회원정보 조회에 실패했습니다.");
      })

    }
    return {state, submit}
  }
}
</script>

<style>
body {
  background-color: #f4f5f7;
}

.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  display: block;
  margin: 0 auto 30px;
  width: 120px;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #555;
}

.form-control {
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
}

.btn-primary {
  background-color: #1e80c1;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #156a96;
}

.social-login-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.social-login-btn a {
  display: inline-block;
  text-align: center;
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.kakao { background-color: #FEE500; }
.naver { background-color: #03C75A; }
.apple { background-color: #000; }
.google { background-color: #DB4437; }

.social-login-btn a:hover {
  opacity: 0.9;
}

.footer-links {
  text-align: center;
  margin-top: 20px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 0.875rem;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>