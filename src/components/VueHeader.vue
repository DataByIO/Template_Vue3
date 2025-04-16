<template>
  <header @mouseover="showNav" @mouseout="hideNav">
    <div class="collapse bg-dark " :class="{ show: isNavVisible }" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 py-4">
            <h4 class="text-white">사이트맵</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/" class="text-white">메인화면</router-link>
              </li>
              <li>
                <p to="/login" class="text-white" v-if="$store.state.id">{{ $store.state.id }} ({{ $store.state.username }})님 안녕하세요</p>
              </li>
              <li>
                <router-link to="/loginpage" class="text-white" v-if="!$store.state.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <strong>Album</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import router from "@/scripts/router";
import store from "@/scripts/store";

export default {
  name: 'VueHeader',
  data() {
    return {
      isNavVisible: false // 초기 상태에서 nav는 숨겨져 있음
    };
  },
  methods: {
    showNav() {
      this.isNavVisible = true; // 마우스가 올라가면 사이드바 보이도록
    },
    hideNav() {
      this.isNavVisible = false; // 마우스가 벗어나면 사이드바 숨기기
    },
    logout() {
      axios.postForm("/logout").then(() => {
        store.commit("setId", null);
        store.commit("setUsername", null);
        store.commit("setRole", null);
        router.push({ path: "/" });
      }).catch(() => {
        window.alert("요청에 실패했습니다.");
      });
    }
  }
}
</script>