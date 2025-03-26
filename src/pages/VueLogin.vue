<template>
  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             v-model="state.from.email">
      <label for="floatingInput">Email address</label>
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
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
  setup() {
    const state = reactive({
      from: {
        email: "",
        password: ""
      }
    })
    //Function: @click="submit()
    const submit = () => {//submit이라는 Function 선언
      //axios를 이용하여 프론트엔드 단 데이터를 /api/account/login로 보내는데 state.from항목들을 보낼거다.
      // 이때 state.from의 항목들은 Json(Key, Value) 형식으로 Controller에 넘어감
      axios.post("/api/account/login", state.from).then((res) => {
        //통신 완료시 store에 해당 id 정보를 넣어줌.
        store.commit('setAccount', res.data)
        console.log("log Value::: " + res.data);
        sessionStorage.setItem("id", res.data)// sessionStorage에 응답받은 ID값을 저장함
        router.push({path: "/"});
        window.alert("로그인하였습니다.");
      }).catch(()=> {//로그인에 실패했을때 처리
        window.alert("로그인 정보가 존재하지 않습니다.");
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