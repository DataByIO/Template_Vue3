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
import store from "@/scripts/store";
import router from "@/scripts/router";

export default {
  setup() {
    const state = reactive({
      headers: {
        'Content-type': 'multipart/form-data',
      },
      from: {
        username: "",
        password: ""
      }
    })
    //Function: @click="submit()
    const submit = () => {//submit이라는 Function 선언
      //axios를 이용하여 프론트엔드 단 데이터를 /api/account/login로 보내는데 state.from항목들을 보낼거다.
      // 이때 state.from의 항목들은 Json(Key, Value) 형식으로 Controller에 넘어감
      axios.postForm("/login", state.from).then((res) => {
        //통신 완료시 store에 해당 id 정보를 넣어줌.
        let accessToken = res.headers['access'];
        axios.defaults.headers.common[
            'access'
            ] = `${accessToken}`;
        store.commit('token', accessToken)
        console.log("token::: " + accessToken);
        console.log("log Value::: " + res.data);
        router.push({path: "/"});
        //localStorage.setItem("token", accessToken)// sessionStorage에 응답받은 ID값을 저장함
        window.alert("로그인하였습니다.");
        // axios.post("/main").then(({data})=> { // 중괄호 {data}사용시 호출한 데이터를 바로 가져올 수 있음
        //   //console.log(res);
        //   state.items = data // 호출한 데이터를 state변수 안에 있는 items 배열에 담아줌
        // })
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