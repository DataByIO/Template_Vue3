<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             v-model="state.from.username">
      <label for="floatingInput">Id address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
             v-model="state.from.password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="submit()">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
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
        window.alert("로그인 정보가 존재하지 않습니다.");
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
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>