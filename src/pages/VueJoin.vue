<template>
  <div class="signup-container">
    <h4 class="text-center mb-4">회원가입</h4>

    <form>
      <!-- 아이디 -->
      <div class="mb-3">
        <label for="username" class="form-label">아이디</label>
        <input type="text" class="form-control" id="username" placeholder="아이디를 입력하세요" required>
      </div>

      <!-- 비밀번호 -->
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호</label>
        <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요" required>
      </div>

      <!-- 비밀번호 재확인 -->
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">비밀번호 재확인</label>
        <input type="password" class="form-control" id="confirmPassword" placeholder="비밀번호를 다시 입력하세요" required>
      </div>

      <!-- 이름 -->
      <div class="mb-3">
        <label for="name" class="form-label">이름</label>
        <input type="text" class="form-control" id="name" placeholder="이름을 입력하세요" required>
      </div>

      <!-- 생년월일 -->
      <div class="mb-3">
        <label for="birthdate" class="form-label">생년월일</label>
        <input type="date" class="form-control" id="birthdate" required>
      </div>

      <!-- 성별 -->
      <div class="mb-3">
        <label class="form-label">성별</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" required>
          <label for="male" class="form-label">남성</label>

          <input type="radio" id="female" name="gender" value="female" required>
          <label for="female" class="form-label">여성</label>
        </div>
      </div>

      <!-- 본인확인 이메일 -->
      <div class="mb-3">
        <label for="email" class="form-label">본인확인 이메일</label>
        <input type="email" class="form-control" id="email" placeholder="이메일을 입력하세요" required>
      </div>

      <!-- 휴대전화 인증 -->
      <div class="mb-3">
        <label for="phone" class="form-label">휴대전화</label>
        <div class="auth-section">
          <input type="text" class="form-control" id="phone" placeholder="휴대전화 번호를 입력하세요" required>
          <button type="button" class="auth-btn">인증번호 받기</button>
        </div>
      </div>

      <!-- 가입하기 버튼 -->
      <button type="submit" class="btn btn-primary w-100" @click="submit()">가입하기</button>
    </form>
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

.signup-container {
  max-width: 500px;
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

.auth-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-btn {
  margin-left: 10px;
  font-size: 0.875rem;
  color: #fff;
  background-color: #1e80c1;
  border: none;
  border-radius: 8px;
  padding: 14px 10px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}

.auth-btn:hover {
  background-color: #156a96;
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