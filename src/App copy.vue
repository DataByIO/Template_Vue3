<template>
  <!--
  1) template에서 변수에 접근하기 위해서 사용하는 형식은 중괄호 2개 {{ 변수명 }} 
  2) template에서 함수에 접근하기 위해서 사용하는 형식은 중괄호 2개와 안에 함수를 명시 {{ 함수명() }} 
  -->
  <div class="name">{{ name }}</div> 
  <!-- <div class="name">{{ greeting(name) }}</div> -->
  <button class="btn btn-primary" @click="increment">Click</button>
</template>

<script>
/* ref는 변수를 반응성 데이터로 만들어줌. */ 
import { ref } from 'vue';

export default { /* 내보내기 */ 
  setup() {
    /*해당 변수들은 위 template에서 접근이 가능함*/
    const name = ref('Kossie Coder1'); /* const로 정의 후 바인딩 될 변수의 값이 ref 형식임을 명시 */ 

    // const greeting = (name) => {
    //   return 'Hello,' + name;
    // };
    function increment() {
      name.value = 'Kossie Coder'
    }

    return {name, increment};
  }
}
</script>

<style>
  .name {color : red}
</style>



<!--
Vue components는 3분류로 나눠짐
1) template (해당 부분에는 html 태그가 들어가게됨)
2) script (해당 부분에는 javasctipt가 들어감)
3) style (CSS3 코드가 들어감)
-->