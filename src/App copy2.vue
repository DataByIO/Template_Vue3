<template>


  <div class="black-bg" v-if="modalchk == true"> <!-- Vue에서 제공하는 조건식-->
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modalchk = flase">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="Hnav in nav" :key="Hnav">{{ Hnav }}</a> <!-- Vue에서 제공하는 html 반복문 -->
  </div>

  <div v-for="(a, i) in oneroom" :key="a">
    <img :src="oneroom[i].image" class="room-img">
    <h4 @click="modalchk = true">{{ oneroom[i].title }}</h4>
    <p>{{ oneroom[i].content }}</p>
    <p>{{ oneroom[i].price }}만원</p>
  </div>



</template>

<script>

import data from './assets/oneroom.js'


export default {
  /* 
  vue에서 데이터를 보관할 수 있게 정의해 놓는 데이터 보관함 (data) 
  지주 변할거 같은 데이터들은 data() -> object 형식으로 보관하고 html에서 {{ 꽂아서 사용 }}
  vue에서 데이터 바인딩을 하는 이유: 실시간 렌더링 기능을 활용하기 위해서 사용 
  (object의 값이 바뀌면 실시간으로 데이터가 렌더링됨) -> web/app을 만들때 용이
  */
  name: 'App',
  data() { 
    return {
      oneroom : data,
      modalchk : false, //true, false
      count : [0, 1, 2],
      price1 : 50,
      price2 : 60,
      price3 : 70,
      products : ['역삼동원룸', '천호동원룸', '강북구원룸'],
      nav : ['Home','Shop','About']
    }
  },
  methods : { 
    increase() {
      this.count += 1 
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
